// Based on how the data is stored in the memory and accessed by the JavaScript engine, 
// we can categorize data types into two main groups: primitive types and non-primitive types.

//Primitive types:
// Primitive types are call by value, which means that when we assign a primitive value to a variable, 
// we are creating a copy of that value in memory.
// 1. String
// 2. Number
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

const score = 100; // score is a primitive type (number)
const scoreValue = 100.3 // scoreValue is a primitive type (number)
const name = "John"; // name is a primitive type (string)

const isActive = true; // isActive is a primitive type (boolean)
const undefinedValue = undefined; // undefinedValue is a primitive type (undefined)
let uninitializedVariable; // uninitializedVariable is a primitive type (undefined)
const outsideTemp = null; // outsideTemp is a primitive type (null)

const id = Symbol('123') // id is a primitive type (symbol)
const anotherId = Symbol('123') // anotherId is a primitive type (symbol), and it is different from id, even though they have the same description
console.log(id === anotherId); // false, because they are different symbols in memory

const bigIntValue = 9007199254740991n; // bigIntValue is a primitive type (BigInt)

// Non-primitive or Reference types:
// Non-primitive types are call by reference, which means that when we assign a non-primitive value to a variable, 
// we are creating a reference to that value in memory, rather than a copy of it.
// 1. Object
// 2. Array
// 3. Function

const heros = ["Batman", "Superman", "Wonder Woman"]; // heros is a non-primitive type (array)
let myObject = {
    name: "Alice", 
    age: 30 // this is an object literal, which is a non-primitive type (object)
};

const myFunction = function(){
    console.log("Hello, World!"); // myFunction is a non-primitive type (function)
}

// In JavaScript, primitive types are immutable, which means that their values cannot be changed after they are created. 
// Non-primitive types, on the other hand, are mutable, which means that their values can be changed after they are created.

// Is JavaScript a dynamically typed language?
// Yes, JavaScript is a dynamically typed language, which means that variables can hold values of any type and the type of a variable can change at runtime. 
// This allows for greater flexibility in coding but also requires developers to be mindful of type-related issues that may arise during execution.
// Example:
// let myVariable = "Hello"; // myVariable is a string
// console.log(typeof myVariable); // "string"

// myVariable = 42; // myVariable is now a number
// console.log(typeof myVariable); // "number"

// myVariable = true; // myVariable is now a boolean
// console.log(typeof myVariable); // "boolean"

// In this example, we can see that the variable myVariable can hold values of different types (string, number, boolean) without any issues, 
// demonstrating that JavaScript is a dynamically typed language.

console.log(typeof score); // "number"
console.log(typeof name); // "string"
console.log(typeof isActive); // "boolean"
console.log(typeof undefinedValue); // "undefined"
console.log(typeof outsideTemp); // "object" (this is a quirk of JavaScript, null is considered an object)
console.log(typeof id); // "symbol"
console.log(typeof bigIntValue); // "bigint"

console.log(typeof heros); // "object" (arrays are a type of object in JavaScript)
console.log(typeof myObject); // "object"
console.log(typeof myFunction); // "function"

// In JavaScript, we can use the typeof operator to check the type of a variable or value. 
// The typeof operator returns a string indicating the type of the operand.

//***************************************Memory Management***************************************//
// Stack and Heap are two different areas of memory used for different purposes in JavaScript:
//Stack(Primitives): The stack is used for storing primitive values (such as numbers, strings, booleans, etc.) and function calls.
//Heap(Non-Primitives): The heap is used for storing non-primitive values (such as objects, arrays, functions, etc.) and their references.

// When we assign a primitive value to a variable, it is stored directly in the stack. 
// When we assign a non-primitive value to a variable, a reference to that value is stored in the stack, while the actual value is stored in the heap. 
// This is why when we compare two non-primitive values (like objects or arrays), we are comparing their references in the stack, not their actual contents in the heap.

let myFavoriteCartoon = "Tom and Jerry"; // myFavoriteCartoon is stored in the stack as a primitive value
let anotherFavoriteCartoon = myFavoriteCartoon; // anotherFavoriteCartoon is also stored in the stack as a primitive value, and it is a copy of myFavoriteCartoon
anotherFavoriteCartoon = "SpongeBob SquarePants"; // anotherFavoriteCartoon is now a different value in the stack, and it does not affect myFavoriteCartoon

console.log(myFavoriteCartoon); // "Tom and Jerry"
console.log(anotherFavoriteCartoon); // "SpongeBob SquarePants"

// In this example, we can see that myFavoriteCartoon and anotherFavoriteCartoon are stored in the stack as primitive values. 
// When we assign myFavoriteCartoon to anotherFavoriteCartoon, we are creating a copy of the value in the stack. 
// Changing anotherFavoriteCartoon does not affect myFavoriteCartoon because they are stored as separate values in the stack.

let myFavoriteMovie = { title: "Inception", director: "Christopher Nolan" }; // myFavoriteMovie is stored in the heap as a non-primitive value, and a reference to it is stored in the stack
let anotherFavoriteMovie = myFavoriteMovie; // anotherFavoriteMovie is also stored in the stack as a reference to the same non-primitive value in the heap
anotherFavoriteMovie.title = "The Matrix"; // we are modifying the non-primitive value in the heap through the reference anotherFavoriteMovie

console.log(myFavoriteMovie); // { title: "The Matrix", director: "Christopher Nolan" }
console.log(anotherFavoriteMovie); // { title: "The Matrix", director: "Christopher Nolan" }

// In this example, we can see that myFavoriteMovie and anotherFavoriteMovie are stored in the stack as references to the same non-primitive value in the heap. 
// When we modify anotherFavoriteMovie, we are actually modifying the same object in the heap that myFavoriteMovie references. 
// This is why both myFavoriteMovie and anotherFavoriteMovie reflect the change, demonstrating that they are referencing the same non-primitive value in the heap.

let userOne = {
    email: "user@google.com",
    upi: "user@okaxis"
}

let userTwo = userOne; // userTwo is a reference to the same object in the heap that userOne references
userTwo.email = "divya@google.com"; // we are modifying the non-primitive value in the heap through the reference userTwo

console.log(userOne.email); // "divya@google.com"
console.log(userTwo.email); // "divya@google.com"