console.log("2" > 1); //true, string "2" is converted to number 2 before comparison
console.log("02" > 1); //true, string "02" is converted to number 2 before comparison
console.log("2" > "12"); //true, string "2" is greater than string "12" in lexicographical order

console.log(false > 0); //false, false is converted to 0 before comparison
console.log(false == 0); //true, false is converted to 0 before comparison
console.log(false >= 0); //true, false is converted to 0 before comparison

console.log(true > 0); //true, true is converted to 1 before comparison
console.log(true == 1); //true, true is converted to 1 before comparison
console.log(true >= 1); //true, true is converted to 1 before comparison

console.log(null > 0); //false, null is converted to 0 before comparison, so 0 > 0 is false
console.log(null == 0); //false, null is converted to 0 before comparison, so 0 == 0 is false
console.log(null >= 0); //true, null is converted to 0 before comparison, so 0 >= 0 is true

console.log(undefined > 0); //false, undefined is converted to NaN before comparison, so NaN > 0 is false
console.log(undefined == 0); //false, undefined is converted to NaN before comparison, so NaN == 0 is false 
console.log(undefined >= 0); //false, undefined is converted to NaN before comparison, so NaN >= 0 is false

// Equality check == and comparisons >, <, >=, <= work differently.
// Comparisons convert null to a number treating it as 0
// but equality check does not convert null to a number and treats it as a unique value that is only equal to itself and undefined. 
// This is why null > 0 is false, null == 0 is false, but null >= 0 is true.  

// We can also compare objects, arrays, and functions, but they are compared by reference, not by value. 
// This means that two different objects with the same properties and values are not considered equal because they occupy different memory locations. 
// For example:
let obj1 = { name: "Alice" };
let obj2 = { name: "Alice" };

console.log(obj1 == obj2); // false, because they are different objects in memory
console.log(obj1 === obj2); // false, for the same reason

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

console.log(arr1 == arr2); // false, because they are different arrays in memory
console.log(arr1 === arr2); // false, for the same reason

function func1() {
    return "Hello";
}

function func2() {
    return "Hello";
}

console.log(func1 == func2); // false, because they are different functions in memory
console.log(func1 === func2); // false, for the same reason

// In JavaScript, when we compare objects, arrays, or functions using == or ===, we are comparing their references, not their contents. 
// This means that even if two objects, arrays, or functions have the same properties, values, or code, they are not considered equal unless they reference the same memory location.     

// In addition to the standard comparison operators (>, <, >=, <=, ==, ===), JavaScript also has the following comparison operators:

// 1. != (not equal): This operator checks if two values are not equal. It performs type coercion before comparison.
// Example: console.log(5 != "5"); // false, because "5" is converted to 5 before comparison

// 2. !== (strict not equal): This operator checks if two values are not equal without performing type coercion.
// Example: console.log(5 !== "5"); // true, because they are of different types

// 3. instanceof: This operator checks if an object is an instance of a specific constructor or class.
// Example: 
class Person {}
const person1 = new Person();
console.log(person1 instanceof Person); // true, because person1 is an instance of Person

// 4. in: This operator checks if a property exists in an object.
// Example:
const obj = { name: "Alice", age: 30 };
console.log("name" in obj); // true, because the property "name" exists in obj
console.log("gender" in obj); // false, because the property "gender"   does not exist in obj

// 5. typeof: This operator returns a string indicating the type of the operand.
// Example:
console.log(typeof 42); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (this is a quirk of JavaScript)
console.log(typeof {}); // "object"
console.log(typeof []); // "object" (arrays are a type of object in JavaScript)
console.log(typeof function() {}); // "function"
console.log(typeof Symbol("sym")); // "symbol"  

// Strict Check:a
// The strict equality operator (===) checks for both value and type equality.      
console.log(5 === 5); // true, because both value and type are the same
console.log(5 === "5"); // false, because they are of different types
console.log(true === 1); // false, because they are of different types
console.log(null === undefined); // false, because they are of different types
console.log(NaN === NaN); // false, because NaN is not equal to itself in JavaScript  

console.log("2" === 2); // false, because they are of different types
console.log(false === 0); // false, because they are of different types
console.log(true === 1); // false, because they are of different types
console.log(null === 0); // false, because they are of different types
console.log(undefined === 0); // false, because they are of different types

// In JavaScript, the strict equality operator (===) does not perform type coercion, so it will only return true if both the value and the type of the operands are the same. 
// This is why "2" === 2 is false, false === 0 is false, true === 1 is false, null === 0 is false, and undefined === 0 is false.    





