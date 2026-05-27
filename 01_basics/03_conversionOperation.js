let score = "33abc";

console.log(score); //33abc     
console.log(typeof score); //string
console.log(typeof(score)); //string

let valueInNumber = Number(score); //convert string to number
console.log(typeof score); //string (original variable is still a string)
console.log(typeof valueInNumber); //number (new variable is a number)
console.log(valueInNumber); //NaN (Not a Number, because "33abc" cannot be converted to a valid number )

// Note:
/*
In this code snippet, we have a variable called `score` that is assigned the string value "33abc". 
We then log the value of `score` and its type using `typeof`. The output shows that `score` is a string.
Next, we use the `Number()` function to attempt to convert the string `score` into a number. 
We store the result in a new variable called `valueInNumber`. 
When we log the type of both `score` and `valueInNumber`, we see that `score` remains a string, while `valueInNumber` is of type number.
Finally, when we log the value of `valueInNumber`, it outputs `NaN`, which stands for "Not a Number". 
This happens because the string "33abc" cannot be converted into a valid number due to the presence of non-numeric characters. 
This example illustrates how type conversion works in JavaScript and how it can lead to unexpected results when the input is not in a valid format for conversion.
*/

// Now lets see for null:
let score = null;
  
console.log(typeof score); //object
console.log(typeof(score)); //object

let valueInNumber = Number(score); //convert null to number
console.log(typeof score); //object (original variable is still an object)
console.log(typeof valueInNumber); //number (new variable is a number)
console.log(valueInNumber); //0 (null is converted to 0 when converted to a number) 

// Note:
/*
In this code snippet, we have a variable called `score` that is assigned the value `null`. 
When we log the type of `score` using `typeof`, it returns "object". 
This is a quirk in JavaScript where `null` is considered an object type, even though it represents the absence of any object value.
Next, we use the `Number()` function to convert `score` (which is `null`) into a number. 
The result is stored in a new variable called `valueInNumber`. 
When we log the type of both `score` and `valueInNumber`, we see that `score` remains of type "object", while `valueInNumber` is of type "number".
Finally, when we log the value of `valueInNumber`, it outputs `0`. This is because when `null` is converted to a number in JavaScript, it results in `0`. 
This example demonstrates how type conversion works with `null` in JavaScript and highlights the fact that `null` is treated as an object type, which can lead to some unexpected behavior when working with type conversions.
*/

// Now lets see for undefined:
let score = undefined;          
  
console.log(typeof score);  //undefined
console.log(typeof(score));  //undefined

let valueInNumber = Number(score); //convert undefined to number
console.log(typeof score); //undefined (original variable is still undefined)
console.log(typeof valueInNumber); //number (new variable is a number)
console.log(valueInNumber); //NaN (undefined is converted to NaN when converted to a number)

// Note:
/*
In this code snippet, we have a variable called `score` that is assigned the value `undefined`.
When we log the type of `score` using `typeof`, it returns "undefined", which is the expected result for a variable that has not been assigned a value.  
Next, we use the `Number()` function to convert `score` (which is `undefined`) into a number. 
The result is stored in a new variable called `valueInNumber`. 
When we log the type of both `score` and `valueInNumber`, we see that `score` remains of type "undefined", while `valueInNumber` is of type "number".
Finally, when we log the value of `valueInNumber`, it outputs `NaN`. This is because when `undefined` is converted to a number in JavaScript, it results in `NaN` (Not a Number). 
This example demonstrates how type conversion works with `undefined` in JavaScript and 
highlights the fact that converting `undefined` to a number does not yield a valid numeric value, but rather results in `NaN`.
*/           

// Now lets see for boolean:
let score = true; 

console.log(typeof score); //boolean
console.log(typeof(score)); //boolean

let valueInNumber = Number(score); //convert boolean to number
console.log(typeof score); //boolean (original variable is still a boolean)
console.log(typeof valueInNumber); //number (new variable is a number)
console.log(valueInNumber); //1 (true is converted to 1 when converted to a number)

// Note:
/*
In this code snippet, we have a variable called `score` that is assigned the boolean value `true`.
When we log the type of `score` using `typeof`, it returns "boolean", which is the expected result for a variable that holds a boolean value.
Next, we use the `Number()` function to convert `score` (which is `true`) into a number. 
The result is stored in a new variable called `valueInNumber`. 
When we log the type of both `score` and `valueInNumber`, we see that `score` remains of type "boolean", while `valueInNumber` is of type "number".
Finally, when we log the value of `valueInNumber`, it outputs `1`. This is because when `true` is converted to a number in JavaScript, it results in `1`. 
This example demonstrates how type conversion works with boolean values in JavaScript 
and highlights the fact that `true` is treated as `1` when converted to a number, while `false` would be treated as `0`.
*/  

// Now lets see for symbol:
let sym1 = Symbol('sym1');

console.log(typeof sym1); //symbol
console.log(typeof(sym1)); //symbol

let valueInNumber = Number(sym1); //convert symbol to number
console.log(typeof sym1); //symbol (original variable is still a symbol)
console.log(typeof valueInNumber); //number (new variable is a number)
console.log(valueInNumber); //TypeError: Cannot convert a Symbol value to a number (symbols cannot be converted to numbers in JavaScript)

// Note:
/*
In this code snippet, we have a variable called `sym1` that is assigned a unique symbol using the `Symbol()` function.
When we log the type of `sym1` using `typeof`, it returns "symbol", which is the expected result for a variable that holds a symbol value.
Next, we attempt to use the `Number()` function to convert `sym1` into a number. 
However, this operation is not valid in JavaScript because symbols cannot be converted to numbers. 
As a result, when we try to log the value of `valueInNumber`, it throws a `TypeError` with the message "Cannot convert a Symbol value to a number". 
This example demonstrates that symbols in JavaScript are unique and cannot be coerced into other data types, such as numbers, which is an important aspect of their behavior in the language.
*/

// Now lets see for string:
let score = "Divya";

console.log(typeof score); //string
console.log(typeof(score)); //string

let valueInNumber = Number(score); //convert string to number
console.log(typeof score); //string (original variable is still a string)
console.log(typeof valueInNumber); //number (new variable is a number)
console.log(valueInNumber); //NaN (Not a Number, because "Divya" cannot be converted to a valid number)

// Note:
/*
In this code snippet, we have a variable called `score` that is assigned the string value "Divya".
When we log the type of `score` using `typeof`, it returns "string", which is the expected result for a variable that holds a string value.
Next, we use the `Number()` function to attempt to convert the string `score` into a number. 
The result is stored in a new variable called `valueInNumber`. 
When we log the type of both `score` and `valueInNumber`, we see that `score` remains a string, while `valueInNumber` is of type number.
Finally, when we log the value of `valueInNumber`, it outputs `NaN`, which stands for "Not a Number". 
This happens because the string "Divya" cannot be converted into a valid number due to the presence of non-numeric characters. 
This example illustrates how type conversion works in JavaScript and how it can lead to unexpected results when the input is not in a valid format for conversion.
*/

// Write easy lookup summary for the above conversion operations:
// - Converting a string that cannot be parsed as a number results in `NaN`.
// - Converting `null` to a number results in `0`.
// - Converting `undefined` to a number results in `NaN`.
// - Converting `true` to a number results in `1`, while `false` would result in `0`.
// - Converting a symbol to a number throws a `TypeError` because symbols cannot be converted to numbers.

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn); //convert number to boolean
console.log(booleanIsLoggedIn); //true (1 is converted to true when converted to a boolean)

// true -> 1; false => 0

let isLoggedIn = ""; //empty string is considered falsy in JavaScript   

let booleanIsLoggedIn = Boolean(isLoggedIn);  //this will convert the empty string to a boolean value
console.log(booleanIsLoggedIn);  //false (empty string is converted to false when converted to a boolean)

let isLoggedIn = "Divya"; //non-empty string is considered truthy in JavaScript

let booleanIsLoggedIn = Boolean(isLoggedIn); //this will convert the non-empty string to a boolean value
console.log(booleanIsLoggedIn); //true (non-empty string is converted to true when converted to a boolean)

let someNumber = 0; //0 is considered falsy in JavaScript

let booleanValue = Boolean(someNumber); //this will convert the number to a boolean value
console.log(booleanValue); //false (0 is converted to false when converted to a boolean)

let someNumber = 42; //non-zero numbers are considered truthy in JavaScript

let stringNumber = String(someNumber); //convert number to string
console.log(stringNumber); // "42" (the number 42 is converted to the string "42")
console.log(typeof stringNumber); //string (the type of the new variable is string)

// ****************************************** Operations ******************************************

// In JavaScript, we can perform various operations on different data types. 
// For example, we can perform arithmetic operations on numbers, concatenate strings, and manipulate arrays and objects. 
// Here are some examples of operations in JavaScript:

// Arithmetic Operations:
let a = 10;
let b = 5;

console.log(a + b); //15 (addition)
console.log(a - b); //5 (subtraction)
console.log(a * b); //50 (multiplication)
console.log(a ** b); //100000 (exponentiation)
console.log(a / b); //2 (division)
console.log(a % b); //0 (modulus)

// String Operations:
let str1 = "Hello";
let str2 = "World";

console.log(str1 + " " + str2); // "Hello World" (string concatenation)
console.log(str1.length); //5 (length of the string)
console.log(str1.toUpperCase()); //"HELLO" (convert to uppercase)
console.log(str1.toLowerCase()); //"hello" (convert to lowercase)
console.log(str1.charAt(0)); // "H" (character at index 0)

// Array Operations:
let arr = [1, 2, 3, 4, 5];

console.log(arr.length); //5 (length of the array)
console.log(arr[0]); //1 (accessing the first element)
arr.push(6); //add an element to the end of the array
console.log(arr); //[1, 2, 3, 4, 5, 6] (array after adding an element)
arr.pop(); //remove the last element from the array
console.log(arr); //[1, 2, 3, 4, 5] (array after removing the last element)

// Object Operations:
let person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

console.log(person.name); // "John" (accessing a property)
person.greet(); // "Hello, my name is John" (calling a method)
person.age = 31; //updating a property
console.log(person.age); //31 (updated age)

// These examples demonstrate some of the basic operations that can be performed on different data types in JavaScript. 
// Understanding how to manipulate and operate on data is essential for writing effective JavaScript code.  

let value = 10
let negValue = -value; //negation operator
console.log(negValue); //-10 (the negation of 10 is -10)

let isLoggedIn = true;
let notLoggedIn = !isLoggedIn; //logical NOT operator
console.log(notLoggedIn); //false (the logical NOT of true is false)

let a = 5;
let b = 10;
let isAGreaterThanB = a > b; //greater than operator
console.log(isAGreaterThanB); //false (5 is not greater than 10)

let isALessThanB = a < b; //less than operator
console.log(isALessThanB); //true (5 is less than 10)

let isAEqualToB = a === b; //strict equality operator
console.log(isAEqualToB); //false (5 is not strictly equal to 10)

let isANotEqualToB = a !== b; //strict inequality operator
console.log(isANotEqualToB); //true (5 is not strictly equal to 10)

let isALessThanOrEqualToB = a <= b; //less than or equal to operator
console.log(isALessThanOrEqualToB); //true (5 is less than or equal to 10)

let isAGreaterThanOrEqualToB = a >= b; //greater than or equal to operator
console.log(isAGreaterThanOrEqualToB); //false (5 is not greater than or equal to 10)

// These examples demonstrate the use of various operators in JavaScript, including arithmetic, logical, and comparison operators. 
// Understanding how to use these operators is crucial for performing operations and making decisions in your JavaScript code.

console.log("1" + 2); // "12" (string concatenation, because "1" is a string)
console.log(1 + "2"); // "12" (string concatenation, because "2" is a string)
console.log("1" + 2 + 2); // "122" (string concatenation, because "1" is a string)
console.log(1 + 2 + "2"); // "32" (string concatenation, because "2" is a string)   

console.log("1" - 2); // -1 (subtraction, because "1" is converted to a number)
console.log("1" * 2); // 2 (multiplication, because "1" is converted to a number)
console.log("1" / 2); // 0.5 (division, because "1" is converted to a number)

console.log(true); //true (boolean value)
console.log(false); //false (boolean value)
console.log(true + true); // 2 (true is converted to 1, so 1 + 1 = 2)
console.log(true + false); // 1 (true is converted to 1 and false is converted to 0, so 1 + 0 = 1)
console.log(false + false); // 0 (false is converted to 0, so 0 + 0 = 0)
console.log(+true); // 1 (unary plus operator converts true to 1)
console.log(+false); // 0 (unary plus operator converts false to 0)
console.log(+""); // 0 (unary plus operator converts empty string to 0)

// Assignment operators:
let x = 10;
x += 5; // equivalent to x = x + 5
console.log(x); // 15 (x is now 15)

x -= 3; // equivalent to x = x - 3
console.log(x); // 12 (x is now 12)

x *= 2; // equivalent to x = x * 2  
console.log(x); // 24 (x is now 24) 

x /= 4; // equivalent to x = x / 4
console.log(x); // 6 (x is now 6)

x %= 5; // equivalent to x = x % 5
console.log(x); // 1 (x is now 1)

let gameCounter = 100
gameCounter++; //increment operator (equivalent to gameCounter = gameCounter + 1)
console.log(gameCounter); //101 (gameCounter is now 101)
++gameCounter; //increment operator (equivalent to gameCounter = gameCounter + 1)
console.log(gameCounter); //102 (gameCounter is now 102)

Pre-increment and post-increment operators:
let a = 5;
console.log(a++); // 5 (post-increment: returns the value before incrementing)
console.log(a); // 6 (a is now 6)

let b = 5;
console.log(++b); // 6 (pre-increment: increments the value before returning it)
console.log(b); // 6 (b is now 6)

// The difference between pre-increment and post-increment is the order of evaluation. 
// In post-increment, the original value is returned first, and then the variable is incremented. 
// In pre-increment, the variable is incremented first, and then the new value is returned. 
// This can lead to different results depending on how the increment operator is used in an expression.

// Some examples of using pre-increment and post-increment in expressions:
let x = 5;
let y = x++ + 10;   
console.log(x); // 6 (x is now 6)
console.log(y); // 15 (y is 5 + 10, because x was post-incremented)

let a = 5;
let b = ++a + 10; 
console.log(a); // 6 (a is now 6)
console.log(b); // 16 (b is 6 + 10, because a was pre-incremented)

// In the first example, `x++` returns the original value of `x` (which is 5) and then increments `x` to 6. 
// In the second example, `++a` increments `a` to 6 first and then returns the new value of `a` (which is 6) to be added to 10. 
// This illustrates how the order of evaluation differs between pre-increment and post-increment operators in JavaScript.   


