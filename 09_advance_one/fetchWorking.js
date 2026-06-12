// Q1. Fetch a list of users (Basic GET)

async function getAllUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);

  const users = await res.json();
  console.log(`Got ${users.length} users`);
  return users;
}

getAllUsers().then(users => console.log(users[0].name)); // "Leanne Graham"

// Q2. Fetch a single resource by ID

async function getUserById(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (res.status === 404) throw new Error('User not found');
  if (!res.ok) throw new Error(`Failed: ${res.status}`);

  return res.json();
}

getUserById(1).then(u => console.log(u.email)); // "Sincere@april.biz"
getUserById(999).catch(e => console.log(e.message)); // "User not found"
// Interview point: Always handle 404 separately — it's a valid resolved promise, not a catch.

// Q3. POST — Create a new resource

async function createPost(title, body, userId) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, body, userId })
  });

  if (!res.ok) throw new Error(`Create failed: ${res.status}`);

  const newPost = await res.json();
  console.log('Created with ID:', newPost.id); // 101 (fake but returned)
  return newPost;
}

createPost('My Title', 'Some body text', 1);

// Q4. PUT vs PATCH — Full replace vs partial update

// PUT — replace the whole resource
async function updatePostFull(id, data) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data) // must send ALL fields
  });

  return res.json();
}

// PATCH — update only what you send
async function updatePostPartial(id, fields) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(fields) // only send what changed
  });

  return res.json();
}

updatePostFull(1, { title: 'New Title', body: 'New body', userId: 1 });
updatePostPartial(1, { title: 'Just change the title' });


// Q5. DELETE a resource

// async function deletePost(id) {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//     method: 'DELETE'
//   });

//   if (!res.ok) throw new Error(`Delete failed: ${res.status}`);

//   console.log(`Post ${id} deleted, status: ${res.status}`); // 200
//   return true;
// }

// deletePost(1);

// Q6. Parallel fetches — Classic interview question
// "How do you make multiple API calls efficiently?"


// BAD — sequential, each waits for the previous
async function slowWay() {
  const user = await fetch('https://jsonplaceholder.typicode.com/users/1').then(r => r.json());
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1').then(r => r.json());
  const todos = await fetch('https://jsonplaceholder.typicode.com/todos?userId=1').then(r => r.json());
  return { user, posts, todos };
}

// GOOD — all fire at the same time
async function fastWay() {
  const [user, posts, todos] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/users/1').then(r => r.json()),
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1').then(r => r.json()),
    fetch('https://jsonplaceholder.typicode.com/todos?userId=1').then(r => r.json()),
  ]);

  return { user, posts, todos };
}

// EVEN BETTER for interviews — handle individual failures
async function safeFastWay() {
  const results = await Promise.allSettled([
    fetch('https://jsonplaceholder.typicode.com/users/1').then(r => r.json()),
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1').then(r => r.json()),
    fetch('https://jsonplaceholder.typicode.com/todos?userId=999999').then(r => r.json()), // this might fail
  ]);

  results.forEach((result, i) => {
    if (result.status === 'fulfilled') console.log(`Request ${i} succeeded:`, result.value);
    else console.log(`Request ${i} failed:`, result.reason);
  });
}
// Interview point: Know Promise.all (fails fast if one fails) vs Promise.allSettled (waits for all, reports each outcome).

// Q7. Abort / Timeout — Very common interview question
// "How do you cancel a fetch or add a timeout?"


// Cancel on demand
function fetchWithAbort(url) {
  const controller = new AbortController();

  const request = fetch(url, { signal: controller.signal })
    .then(r => r.json())
    .catch(err => {
      if (err.name === 'AbortError') return null; // cancelled — not an error
      throw err;
    });

  return { request, cancel: () => controller.abort() };
}

const { request, cancel } = fetchWithAbort('https://jsonplaceholder.typicode.com/posts');

// Cancel after 100ms (simulate user navigating away)
setTimeout(cancel, 100);
const data = await request;
console.log(data); // null — was cancelled


// Timeout pattern
function fetchWithTimeout(url, ms = 3000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);

  return fetch(url, { signal: controller.signal })
    .then(r => r.json())
    .finally(() => clearTimeout(timer)); // always clean up the timer
}

fetchWithTimeout('https://jsonplaceholder.typicode.com/posts/1', 2000)
  .then(data => console.log(data))
  .catch(err => console.log(err.name === 'AbortError' ? 'Timed out!' : err));

// Q8. Retry with exponential backoff — Senior-level question

async function fetchWithRetry(url, options = {}, retries = 3) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url, options);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.json();

    } catch (err) {
      const isLast = attempt === retries;
      if (isLast) throw err;

      const delay = 2 ** attempt * 100; // 200ms, 400ms, 800ms...
      console.log(`Attempt ${attempt} failed. Retrying in ${delay}ms...`);
      await new Promise(r => setTimeout(r, delay));
    }
  }
}

// Works great for flaky endpoints
fetchWithRetry('https://jsonplaceholder.typicode.com/posts/1')
  .then(data => console.log('Got it:', data.title))
  .catch(err => console.log('All retries failed:', err.message));

// Q9. Query params — Filtering/searching

// Manual way
fetch('https://jsonplaceholder.typicode.com/posts?userId=1&_limit=3')
  .then(r => r.json())
  .then(posts => console.log(`Got ${posts.length} posts`)); // 3

// Clean way using URLSearchParams
async function getPosts(filters = {}) {
  const params = new URLSearchParams(filters);
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?${params}`);
  return res.json();
}

getPosts({ userId: 1, _limit: 5 }).then(console.log);

// Q10. Reusable fetch wrapper — What interviewers love to see

class ApiClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async request(endpoint, { method = 'GET', body, headers = {} } = {}) {
    const res = await fetch(`${this.baseURL}${endpoint}`, {
      method,
      headers: { 'Content-Type': 'application/json', ...headers },
      body: body ? JSON.stringify(body) : undefined,
    });

    if (!res.ok) throw new Error(`API Error: ${res.status} ${res.statusText}`);
    return res.json();
  }

  get(endpoint)              { return this.request(endpoint); }
  post(endpoint, body)       { return this.request(endpoint, { method: 'POST', body }); }
  put(endpoint, body)        { return this.request(endpoint, { method: 'PUT', body }); }
  patch(endpoint, body)      { return this.request(endpoint, { method: 'PATCH', body }); }
  delete(endpoint)           { return this.request(endpoint, { method: 'DELETE' }); }
}

// Usage
const api = new ApiClient('https://jsonplaceholder.typicode.com');

const post  = await api.get('/posts/1');
const newP  = await api.post('/posts', { title: 'Test', body: 'Hi', userId: 1 });
const fixed = await api.patch('/posts/1', { title: 'Fixed title' });
await api.delete('/posts/1');
