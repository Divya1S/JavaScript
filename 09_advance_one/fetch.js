// What is fetch?
// Think of fetch as your app's pizza delivery guy. You place an order (request), he goes to the kitchen (server), and comes back with your pizza (response). 
// Sometimes he's late. Sometimes the kitchen is closed. Life happens.


// Basic fetch — "Hey, bring me some users!"
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())   // unwrap the pizza box
  .then(data => console.log(data))     // eat the pizza
  .catch(error => console.log('Kitchen on fire:', error));

// The Response Object — Your Pizza Box
// fetch resolves with a Response object, NOT the actual data. You have to unwrap it.


// fetch('/api/data')
//   .then(response => {
//     console.log(response.status);     // 200, 404, 500...
//     console.log(response.ok);         // true if status 200-299
//     console.log(response.statusText); // "OK", "Not Found"...
//     console.log(response.headers);    // Headers object
    
//     return response.json();  // parse body as JSON
//     // other options:
//     // response.text()    — plain text
//     // response.blob()    — files/images
//     // response.formData()
//   });
// Gotcha #1: fetch only rejects on network failure (no internet). A 404 or 500 is NOT a rejection — response.ok will be false but it still resolves!


// THE CLASSIC INTERVIEW TRAP 🪤
// fetch('/api/oops')
//   .then(res => {
//     if (!res.ok) throw new Error(`HTTP Error: ${res.status}`); // you must do this!
//     return res.json();
//   })
//   .catch(err => console.log(err));

//   HTTP Methods — The Full Menu

// GET — "just looking"
fetch('/api/users');

// POST — "I want to create something"
fetch('/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Divya', role: 'engineer' })
});

// PUT — "replace the whole thing"
fetch('/api/users/1', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Divya Updated' })
});

// PATCH — "just fix the hair, not the whole face"
fetch('/api/users/1', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Divya Patched' })
});

// DELETE — "yeet it"
fetch('/api/users/1', { method: 'DELETE' });

// async/await — The Grown-Up Way

async function getUser(id) {
  try {
    const res = await fetch(`/api/users/${id}`);
    
    if (!res.ok) throw new Error(`Failed: ${res.status}`);
    
    const user = await res.json();
    return user;
  } catch (err) {
    console.error('Delivery failed:', err);
  }
}

// Headers — Putting Notes on Your Order

fetch('/api/protected', {
  headers: {
    'Authorization': 'Bearer my-secret-token',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Custom-Header': 'whatever-you-want'
  }
});

// Or use the Headers class (more flexible)
const headers = new Headers();
headers.append('Authorization', 'Bearer token');
headers.append('Content-Type', 'application/json');

fetch('/api/data', { headers });

// Interview Favorites 
// 1. Abort a fetch (cancel the order!)

const controller = new AbortController();

fetch('/api/slow-endpoint', { signal: controller.signal })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => {
    if (err.name === 'AbortError') console.log('Request cancelled!');
  });

// Cancel it after 3 seconds
setTimeout(() => controller.abort(), 3000);

// 2. Parallel fetches — Order everything at once

// Sequential (slow) — waiting for each pizza one by one
const users = await fetch('/api/users').then(r => r.json());
const posts = await fetch('/api/posts').then(r => r.json());

// Parallel (fast) — all orders placed simultaneously
const [users, posts, comments] = await Promise.all([
  fetch('/api/users').then(r => r.json()),
  fetch('/api/posts').then(r => r.json()),
  fetch('/api/comments').then(r => r.json()),
]);

// 3. Retry logic — Knock until someone answers

async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Status: ${res.status}`);
      return await res.json();
    } catch (err) {
      if (i === retries - 1) throw err; // last attempt failed
      console.log(`Retry ${i + 1}...`);
      await new Promise(r => setTimeout(r, 1000 * (i + 1))); // backoff
    }
  }
}

// 4. Timeout — Don't wait forever

function fetchWithTimeout(url, ms = 5000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), ms);

  return fetch(url, { signal: controller.signal })
    .finally(() => clearTimeout(timeout));
}

// 5. CORS — The bouncer at the club door
// fetch follows the browser's Same-Origin Policy. Requests to different origins get blocked unless the server includes CORS headers.


// This will fail if server doesn't allow it:
fetch('https://other-domain.com/api/data');

// The server needs to respond with:
// Access-Control-Allow-Origin: *  (or your specific origin)

// You can hint the fetch mode:
fetch('https://other-domain.com/api/data', {
  mode: 'cors',    // default — enforces CORS
  // mode: 'no-cors' — blind send, can't read response
  // mode: 'same-origin' — error if cross-origin
});

// 6. Credentials / Cookies — "Remember me"

fetch('/api/profile', {
  credentials: 'include',    // send cookies cross-origin
  // credentials: 'same-origin' — default, only same origin
  // credentials: 'omit'        — never send cookies
});