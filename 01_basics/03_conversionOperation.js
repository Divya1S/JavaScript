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