// //Async 
// Javascript:
// Synchronous
// Single threaded
// Default Javascript behavior 


// Execution Context:
// Create one line of code at a time 
// console.log -> 1
// console.log -> 2 
// each operation waits for the last one to complete before executing 

// CALL STACK 
// MEMORY HEAP

// Blocking Code:
// Block the flow of Program 
// Read File Sync

// Non-Blocking Code:
// Does not block execution
// Read File Async 

// ## Comprehensive Guide to JavaScript's Asynchronous Architecture

// Understanding how JavaScript handles operations is crucial for writing efficient and responsive code. While JavaScript itself is single-threaded and execution is fundamentally synchronous, it utilizes the web browser's infrastructure to handle asynchronous tasks seamlessly. Below, we break down the core components of the JavaScript runtime and contrast blocking vs. non-blocking code.

// ### 1. The Core Nature of JavaScript

// #### Synchronous & Single-Threaded

// JavaScript is designed to be **synchronous** and **single-threaded**.

// * **Single-threaded:** Only one execution stack exists. The engine can only execute one command at a time.
// * **Synchronous:** Code is executed line-by-line, in order. Each operation must finish before the next one starts.

// ```javascript
// // Default Synchronous Behavior
// console.log("Start"); // Executed 1st
// console.log("Middle"); // Executed 2nd
// console.log("End");   // Executed 3rd

// ```

// ---

// ### 2. The JavaScript (JS) Engine

// The JS Engine (like V8 in Chrome) consists of two main components that manage memory and execution:

// * **Memory Heap:** This is where memory is allocated for objects, variables, and closures used in your program. It is an unstructured memory region used for "large" data allocation.
// * **Call Stack:** This is a LIFO (Last In, First Out) data structure that tracks where the program is currently executing. When a function is called, a new "frame" is pushed onto the stack. When the function finishes, its frame is popped off.

// ---

// ### 3. Execution Context

// The **Execution Context** defines the environment in which your code runs.

// #### The Process

// 1. **Global Execution Context:** When your script starts, a default global context is created and pushed onto the empty Call Stack.
// 2. **Function Execution Context:** Every time a function is called, the engine creates a new context for that function and pushes it onto the top of the Call Stack. The engine then focuses on executing the code within that top context.
// 3. **Completion:** Once the function finishes running, its execution context is popped off the stack, and the engine returns to the execution context that was below it.

// ---

// ### 4. Blocking vs. Non-Blocking Code

// This distinction is vital for performance.

// #### A. Blocking Code (Synchronous)

// Blocking code refers to operations that pause the entire execution of the call stack until they finish. While a blocking operation is running, the browser cannot update the UI, respond to user input, or run any other code.

// **Example: `readFileSync**`
// In a server environment (like Node.js), reading a large file synchronously will block everything until the file is fully loaded into memory.

// ```javascript
// const fs = require('fs');

// console.log("1. Starting file read...");

// // This operation blocks the entire stack
// const data = fs.readFileSync('large_file.txt'); 

// console.log("2. File content length:", data.length);
// console.log("3. Ending script.");

// // Output Order:
// // 1. Starting file read...
// // [Significant pause while reading]
// // 2. File content length: ...
// // 3. Ending script.

// ```

// #### B. Non-Blocking Code (Asynchronous)

// Non-Blocking code initiates an operation but doesn't wait for it to complete. It registers a 'callback' (a function to run later) and allows the Call Stack to continue executing the subsequent lines of code immediately.

// **Example: `setTimeout` and `fetch()**`
// Web APIs, provided by the browser, are used to offload these asynchronous operations.

// ```javascript
// console.log("1. Program Start");

// // Non-blocking: Request handled by Web API
// fetch('https://api.example.com/data')
//     .then(response => response.json())
//     .then(data => console.log("3. Data received (Async callback)"))
//     .catch(err => console.error(err));

// console.log("2. Program End (Stack is free)");

// // Output Order:
// // 1. Program Start
// // 2. Program End (Stack is free)
// // [Some time later]
// // 3. Data received (Async callback)

// ```

// In this example, the fetch request is made, but JavaScript doesn't wait. It moves to line '2' instantly. When the server responds, the browser's Web API places the 'then' callback into a queue to be executed once the Call Stack is empty.

// ---

// ### 5. Understanding the Asynchronous Model

// When asynchronous calls (like `fetch` or `setTimeout`) are made, the JS engine doesn't handle them alone. The browser environment provides additional tools:

// * **Web APIs:** The browser provides APIs (DOM, fetch, setTimeout) that run operations outside of the main JS thread. When you call `setTimeout`, the browser starts a timer.
// * **The Callback Queues:** When a Web API operation finishes, its associated callback function is placed into a queue. There are two main types:
// * **Microtask Queue (Job Queue):** Used for Promises (like `.then()`). These have *higher priority* and are processed completely before any macrotasks.
// * **Macrotask Queue (Task Queue):** Used for `setTimeout`, `setInterval`, events, etc.


// * **The Event Loop:** This is the manager. Its job is to constantly look at the Call Stack and the Callback Queues.
// * If the **Call Stack is empty** and there are waiting tasks in the **Microtask Queue**, it pushes them one-by-one onto the stack.
// * If the **Call Stack is empty** and the **Microtask Queue is empty**, it takes the first task from the **Macrotask Queue** and pushes it onto the stack.

