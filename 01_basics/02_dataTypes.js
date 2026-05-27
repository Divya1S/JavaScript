"use strict"; //treat all JS code as newer version 

// alert(3 + 3) this will throw an error as we are using nodejs not browser

console.log(3  
    + 3) //dont do any of these things as we always want the code readability to be high

let name = "John"; //string data type
let age = 30; //number data type
let isStudent = true; //boolean data type
let hobbies = ["reading", "gaming", "coding"]; //array data type
let address = { //object data type
    street: "123 Main St",
    city: "Anytown",
    country: "USA"
};

console.log(name);
console.log(age);
console.log(isStudent);
console.log(hobbies);
console.log(address);       

//Primitives data types in JavaScript:
//number : 2^53 - 1 to -(2^53 - 1)
//bigint : can represent integers larger than 2^53 - 1
//string : sequence of characters enclosed in single, double, or backticks
//boolean : true or false
//null : represents the intentional absence of any object value
let y = null; //y is null
// See if I ask server to fetch temperature data and if it gives zero it is incorrect as it is still temperature value, but if it gives null it means there is no data available for temperature.

//undefined : represents a variable that has been declared but not assigned a value
let x; //x is undefined

// Difference between null and undefined:
// - null is an assignment value, it can be assigned to a variable as a representation of no value. It is an object type.
// - undefined means a variable has been declared but has not yet been assigned a value. It is a primitive type.
// Another difference is that null is explicitly set by the programmer to indicate that a variable should have no value, while undefined is automatically assigned by JavaScript when a variable is declared but not initialized.

// Next we have the symbol data type, which is a unique and immutable primitive value that can be used as the key of an object property. Symbols are created using the Symbol() function and can be used to create private properties in objects or to avoid name collisions in object properties.
//symbol
let sym1 = Symbol('description'); //sym1 is a symbol
let sym2 = Symbol('description'); //sym2 is another symbol
console.log(sym1 === sym2); //false, symbols are unique
// Note: The symbol data type is commonly used in React for creating unique keys for components and in other libraries for creating unique identifiers.
// Example of using symbol in React:
// import React from 'react';

// const MyComponent = () => {
//     const uniqueKey = Symbol('uniqueKey'); //create a unique symbol
//     return (
//         <div key={uniqueKey}>This is a component with a unique key</div>
//     );
// };

// export default MyComponent;     

//Objects:
// Object is a complex data type that can store collections of data and more complex entities. Objects are created using curly braces {} and can contain properties and methods. Properties are key-value pairs that describe the characteristics of the object, while methods are functions that perform actions on the object.
// let person = {
//     name: "John",
//     age: 30,
//     isStudent: true,
//     hobbies: ["reading", "gaming", "coding"],
//     address: {
//         street: "123 Main St",
//         city: "Anytown",
//         country: "USA"
//     },
//     greet: function() { //method
//         console.log("Hello, my name is " + this.name);
//     }
// };

// console.log(person.name); //accessing property
// person.greet(); //calling method

// In JavaScript, functions are also objects, which means they can have properties and methods. This allows us to create higher-order functions, which are functions that can take other functions as arguments or return functions as their result. Higher-order functions are a powerful tool for creating reusable and modular code in JavaScript.
// function greet(name) {
//     return "Hello, " + name + "!";
// }

// function higherOrderFunction(func) {
//     return function(name) {
//         return func(name) + " Welcome to JavaScript!";
//     }
// }

// const greetWithWelcome = higherOrderFunction(greet);
// console.log(greetWithWelcome("John")); // Output: Hello, John! Welcome to JavaScript!   

console.log(typeof name); //string
console.log(typeof age); //number
console.log(typeof isStudent); //boolean
console.log(typeof hobbies); //object (arrays are a type of object in JavaScript)
console.log(typeof address); //object
console.log(typeof y); //object (null is considered an object in JavaScript)
console.log(typeof x); //undefined
console.log(typeof sym1); //symbol

console.log(typeof null); //object
console.log(typeof undefined); //undefined
// Note: The typeof operator in JavaScript can sometimes return unexpected results, such as returning "object" for null. 
// This is a quirk of the language and is something to be aware of when working with data types in JavaScript.

// In JavaScript, there are two types of data types: primitive and non-primitive. 
// Primitive data types include number, string, boolean, null, undefined, and symbol. 
// Non-primitive data types include objects and arrays. 
// Primitive data types are immutable, meaning their values cannot be changed once they are assigned
// While non-primitive data types are mutable, meaning their values can be changed after they are created. 
// Understanding the different data types in JavaScript is essential for writing efficient and effective code.