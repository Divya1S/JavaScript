const score = 400
console.log(score)

const balance = new Number(1001)
console.log(balance)

console.log(balance.toString()) // "1001"
console.log(typeof balance.toString()) // "string"
console.log(balance.toString().length) // 4

console.log(balace.toFixed(3)) // "1001.000" (returns a string representing the number with a specified number of decimal places)
console.log(balance.toExponential(2)) // "1.00e+3" (returns a string representing the number in exponential notation with a specified number of digits after the decimal point)
console.log(balance.toPrecision(4)) // "1001" (returns a string representing the number to a specified precision)
console.log(balance.valueOf()) // 1001 (returns the primitive value of the Number object)
console.log(balance.toLocaleString()) // "1,001" (returns a string with a language-sensitive representation of the number)
console.log(balance.toLocaleString("en-US", { style: "currency", currency: "USD" })) // "$1,001.00" (returns a string with a language-sensitive representation of the number formatted as currency)
console.log(balance.toLocaleString("en-GB", { style: "currency", currency: "GBP" })) // "£1,001.00" (returns a string with a language-sensitive representation of the number formatted as currency)
console.log(balance.toLocaleString("de-DE", { style: "currency", currency: "EUR" })) // "1.001,00 €" (returns a string with a language-sensitive representation of the number formatted as currency)
console.log(balance.toLocaleString("ja-JP", { style: "currency", currency: "JPY" })) // "￥1,001" (returns a string with a language-sensitive representation of the number formatted as currency)

const otherNumber1 = 23.8966
console.log(otherNumber1.toPrecision(3)) // "23.9" (returns a string representing the number to a specified precision)
console.log(otherNumber1.toPrecision(4)) // "23.90" (returns a string representing the number to a specified precision)

const otherNumber2 = 123.8966
console.log(otherNumber2.toPrecision(3)) // "1.24e+2" (returns a string representing the number to a specified precision in exponential notation)
console.log(otherNumber2.toPrecision(4)) // "123.9" (returns a string representing the number to a specified precision)

const otherNumber3 = 0.000123456
console.log(otherNumber3.toPrecision(3)) // "0.000123" (returns a string representing the number to a specified precision)
console.log(otherNumber3.toPrecision(4)) // "0.0001235" (returns a string representing the number to a specified precision)

const otherNumber4 = 1123.8966
console.log(otherNumber4.toPrecision(3)) // "1.12e+3" (returns a string representing the number to a specified precision in exponential notation)
console.log(otherNumber4.toPrecision(4)) // "1120" (returns a string representing the number to a specified precision, rounded to the nearest integer)

const hundreds = 1000000
console.log(hundreds.toLocaleString("en-US")) // "1,000,000" (returns a string with a language-sensitive representation of the number)
console.log(hundreds.toLocaleString("en-IN")) // "10,00,000" (returns a string with a language-sensitive representation of the number formatted according to the Indian numbering system)

//Maths in JavaScript
console.log(Math);
console.log(Math.PI); // 3.141592653589793 (the ratio of the circumference of a circle to its diameter)
console.log(Math.E); // 2.718281828459045 (the base of natural logarithms)
console.log(Math.SQRT2); // 1.4142135623730951 (the square root of 2)
console.log(Math.SQRT1_2); // 0.7071067811865476 (the square root of 1/2)
console.log(Math.LN2); // 0.6931471805599453 (the natural logarithm of 2)
console.log(Math.LN10); // 2.302585092994046 (the natural logarithm of 10)
console.log(Math.LOG2E); // 1.4426950408889634 (the base-2 logarithm of E)
console.log(Math.LOG10E); // 0.4342944819032518 (the base-10 logarithm of E)
console.log(Math.abs(-5)); // 5 (returns the absolute value of a number)
console.log(Math.ceil(4.2)); // 5 (returns the smallest integer greater than or equal to a number)
console.log(Math.floor(4.8)); // 4 (returns the largest integer less than or equal to a number)
console.log(Math.round(4.5)); // 5 (returns the value of a number rounded to the nearest integer)
console.log(Math.max(1, 3, 2)); // 3 (returns the largest of zero or more numbers)
console.log(Math.min(1, 3, 2)); // 1 (returns the smallest of zero or more numbers)
console.log(Math.pow(2, 3)); // 8 (returns the base to the exponent power)
console.log(Math.sqrt(16)); // 4 (returns the square root of a number)
console.log(Math.random()); // returns a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random() * 10); // returns a random number between 0 (inclusive) and 10 (exclusive)
console.log(Math.floor(Math.random() * 10)); // returns a random integer between 0 (inclusive) and 10 (exclusive)
console.log(Math.floor((Math.random() * 10)) + 1); // returns a random integer between 1 (inclusive) and 10 (inclusive)
console.log(Math.floor((Math.random() * (max - min + 1))) + min); // returns a random integer between min (inclusive) and max (inclusive)
console.log(Math.sin(Math.PI / 2)); // 1 (returns the sine of a number)
console.log(Math.cos(0)); // 1 (returns the cosine of a number)
console.log(Math.tan(Math.PI / 4)); // 1 (returns the tangent of a number)
console.log(Math.asin(1)); // 1.5707963267948966 (returns the arcsine of a number)
console.log(Math.acos(0)); // 1.5707963267948966 (returns the arccosine of a number)
console.log(Math.atan(1)); // 0.7853981633974483 (returns the arctangent of a number)
console.log(Math.atan2(1, 1)); // 0.7853981633974483 (returns the arctangent of the quotient of its arguments)
console.log(Math.cbrt(27)); // 3 (returns the cube root of a number)
console.log(Math.clz32(1)); // 31 (returns the number of leading zero bits in the 32-bit binary representation of a number)
console.log(Math.sign(-5)); // -1 (returns the sign of a number, indicating whether it is positive, negative, or zero)
console.log(Math.trunc(4.9)); // 4 (returns the integer part of a number by removing any fractional digits) 

const min = 10
const max = 20 

Math.random() * (max - min + 1) + min; // returns a random number between min (inclusive) and max (inclusive)

Math.floor(Math.random() * (max - min + 1)) + min; // returns a random integer between min (inclusive) and max (inclusive)