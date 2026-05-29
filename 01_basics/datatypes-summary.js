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

