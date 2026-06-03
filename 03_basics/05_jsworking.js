// //JavaScript Execution Context 
// //Execution context is the environment in which JavaScript code is executed. It consists of the variable environment, the scope chain, and the value of 'this'.
// //When a JavaScript program is executed, it creates an execution context for the global scope, and whenever a function is called, a new execution context is created for that function. The execution context is responsible for managing the variables, functions, and the value of 'this' within its scope.

// //Global Execution Context 
// //The global execution context is created when the JavaScript code is first loaded and executed. It is the default execution context and has access to all global variables and functions. The value of 'this' in the global execution context refers to the global object (window in browsers, global in Node.js).

// //Function Execution Context 
// //A new execution context is created whenever a function is called. Each function has its own execution context, which includes its own variable environment, scope chain, and value of 'this'. The value of 'this' in a function execution context depends on how the function is called (e.g., as a method of an object, as a constructor, etc.).

// //Eval Execution Context
// //The eval execution context is created when the eval() function is called. It allows you to execute a string of JavaScript code within the current execution context. However, using eval() is generally discouraged due to security and performance issues, as it can execute arbitrary code and can lead to vulnerabilities if not used carefully.

// //Lexical Environment 
// //The lexical environment is a part of the execution context that contains the variables and functions that are defined within that context. It is created when a function is called and is destroyed when the function finishes executing. The lexical environment also includes a reference to the outer lexical environment, which allows for variable lookup in nested functions (closure).

// //Scope Chain 
// //The scope chain is a mechanism that allows JavaScript to look up variables in nested functions. When a variable is accessed, JavaScript first looks for it in the current execution context's lexical environment. If it is not found, it looks in the outer lexical environment, and so on, until it reaches the global execution context. This allows for variable access across different scopes and enables closures in JavaScript.

// //Memory Creation Phase
// //When a JavaScript program is executed, it goes through a memory creation phase where it allocates memory for variables and functions. During this phase, JavaScript creates a global execution context and initializes the variable environment with the variables and functions defined in the global scope. It also sets up the scope chain and determines the value of 'this' for the global execution context. This phase is crucial for the proper functioning of the JavaScript code as it ensures that all variables and functions are properly initialized before they are used in the code.

// //Execution Phase
// //After the memory creation phase, the JavaScript code enters the execution phase, where it executes the code line by line. During this phase, JavaScript evaluates expressions, executes functions, and updates the variable environment as needed. The execution phase is where the actual logic of the code is executed, and it relies on the memory created during the memory creation phase to access variables and functions. The execution phase continues until all code has been executed or until an error occurs.

// let val1 = 10
// let val2 = 5
// function addNum(num1, num2) {
//     let total = num1 + num2
//     return total
// }
// let result1 = addNum(val1, val2)
// let result2 = addNum(10, 2)

// 1. Global Execution:
// // The code will first run through Global Execution and will be allocated to this 
// // Global Execution Context (GEC) and will be executed line by line. During this phase, the JavaScript engine will create a global execution context and will allocate memory for the variables and functions defined in the global scope. The variables val1, val2, addNum, result1, and result2 will be allocated memory and initialized with their respective values (undefined for variables that are declared but not assigned a value). The function addNum will also be allocated memory and its definition will be stored in the global execution context. After the memory creation phase is complete, the JavaScript engine will execute the code line by line, starting with the variable declarations and function definitions, and then executing the function calls to addNum with the respective arguments.

// 2. Memory Creation Phase:
// // During this phase, JavaScript will allocate memory for the variables and functions defined in the global scope. 
// // It will create a global execution context and initialize the variable environment with the variables and functions defined in the global scope. 
// // The variables val1, val2, addNum, result1, and result2 will be allocated memory and initialized with their respective values (undefined for variables that are declared but not assigned a value).
// val1 = undefined
// val2 = undefined
// addNum = definition of the function addNum
// result1 = undefined
// result2 = undefined

// 3. Execution Phase:
// // After the memory creation phase, the JavaScript code enters the execution phase, where it executes the code line by line. 
// // During this phase, JavaScript evaluates expressions, executes functions, and updates the variable environment as needed. 
// // The execution phase is where the actual logic of the code is executed, and it relies on the memory created during the memory creation phase to access variables and functions. 
// // The execution phase continues until all code has been executed or until an error occurs.
// val1 = 10
// val2 = 5
// addNum => new variable environment + execution thread
// result1 = 15


// new variable environment + execution thread:
// 1. Memory Phase:
// val1 ->undefined
// val2 ->undefined
// total ->undefined

// 2.Execution Context:
// num1 -> 10
// num2 -> 5
// total = 15 
// //total is stored in Global 

// Then (new variable environment + execution thread) //this will be deleted 

// Then for result2 we will again have:
// new variable environment + execution thread:
// 1. Memory Phase:
// val1 ->undefined
// val2 ->undefined
// total ->undefined

// 2.Execution Context:
// num1 -> 10
// num2 -> 2
// total = 12
// //total is stored in Global 

// function callstack and its working