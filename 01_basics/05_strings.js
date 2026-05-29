const name = "divya"    
const repoCount = 60

console.log(name + repoCount + "Value") // Output: "divya60Value"
console.log(name + " " + repoCount + " Value") // Output: "divya 60 Value"
console.log(`${name} ${repoCount} Value`) // Output: "divya 60 Value"
console.log(`${name} has ${repoCount} repositories`) // Output: "divya has 60 repositories"

// In JavaScript, we can concatenate strings using the + operator or by using template literals (enclosed in backticks ``) which allow for easier string interpolation. 
//They act as placeholders for variables and expressions, making it easier to create complex strings without needing to worry about the order of concatenation or adding spaces manually.
// When we concatenate a string with a number, the number is converted to a string and then concatenated. 
// Template literals provide a more readable and convenient way to include variables and expressions in strings without needing to use the + operator for concatenation.

// Another way to declare a string:
const myName = new String("divya") // This creates a String object, which is different from a string primitive
console.log(myName);
console.log(typeof myName); // "object"
console.log(myName[0]); // "d"
console.log(myName.length); // 5
console.log(myName.toUpperCase()); // "DIVYA"
console.log(myName.toLowerCase()); // "divya"
console.log(myName.__proto__); // String.prototype, which contains all the methods available to String objects
console.log(myName.charAt(2)); // "v"
console.log(myName.includes("vy")); // true
console.log(myName.startsWith("di")); // true
console.log(myName.endsWith("ya")); // true
console.log(myName.indexOf("v")); // 2
console.log(myName.slice(1, 4)); // "ivy" //inclusive of start index and exclusive of end index
console.log(myName.split("")); // ["d", "i", "v", "y", "a"] it converts the string into an array of characters
console.log(myName.replace("divya", "Divya")); // "Divya"
console.log(myName.substring(1, 4)); // "ivy" //inclusive of start index and exclusive of end index
console.log(myName.trim()); // "divya" (removes whitespace from both ends of the string)
console.log(myName.trimStart()); // "divya" (removes whitespace from the start of the string)
console.log(myName.trimEnd()); // "divya" (removes whitespace from the end of the string)
console.log(myName.at(2)); // "v" (returns the character at the specified index, supports negative indexing)
console.log(myName.at(-1)); // "a" (returns the last character of the string)
console.log(myName.codePointAt(0)); // 100 (returns the Unicode code point value of the character at the specified index)
console.log(myName.concat(" Rajput")); // "divya Rajput" (concatenates the string with another string)
console.log(myName.endsWith("ya", 4)); // true (checks if the string ends with a specified substring, optionally up to a certain length)
console.log(myName.localeCompare("divya")); // 0 (compares two strings in the current locale, returns 0 if they are equal)
console.log(myName.match(/v/)); // ["v"] (searches for a match between a regular expression and the string)
console.log(myName.matchAll(/v/g)); // an iterator of all matches for the regular expression in the string
console.log(myName.normalize()); // "divya" (returns the Unicode Normalization Form of the string)
console.log(myName.padStart(10, "*")); // "*****divya" (pads the start of the string with a specified character until it reaches a certain length)
console.log(myName.padEnd(10, "*")); // "divya*****" (pads the end of the string with a specified character until it reaches a certain length)
console.log(myName.repeat(3)); // "divyadivyadivya" (repeats the string a specified number of times)
console.log(myName.replaceAll("v", "V")); // "diVya" (replaces all occurrences of a substring with a new substring)
console.log(myName.search(/v/)); // 2 (searches for a match between a regular expression and the string, returns the index of the first match)
console.log(myName.slice(-3)); // "ya" (extracts a section of the string, supports negative indexing)
console.log(myName.substring(4, 1)); // "ivy" (extracts a section of the string, does not support negative indexing)
console.log(myName.toLocaleUpperCase()); // "DIVYA" (returns the string converted to uppercase according to any locale-specific case mappings)
console.log(myName.toLocaleLowerCase()); // "divya" (returns the string converted to lowercase according to any locale-specific case mappings)
console.log(myName.toString()); // "divya" (returns a string representing the object)
console.log(myName.valueOf()); // "divya" (returns the primitive value of the String object)
console.log(myName.charCodeAt(0)); // 100 (returns the Unicode value of the character at the specified index)


const url = "https://www.example.com/example%50page"
console.log(url.replace('%50', '-')); // "https://www.example.com/example-page"

// In JavaScript, strings are immutable, which means that once a string is created, it cannot be changed. 
// However, we can create new strings based on existing ones using various string methods. 
// The String object provides a wide range of methods for manipulating strings, such as toUpperCase(), toLowerCase(), charAt(), includes(), startsWith(), endsWith(), indexOf(), slice(), split(), replace(), substring(), trim(), and many more. 
// These methods allow us to perform various operations on strings, such as changing the case, accessing individual characters, checking for substrings, extracting parts of the string, and removing whitespace.

// In this example, we are creating a String object using the String constructor. 
// The typeof operator returns "object" for myName, indicating that it is an object and not a string primitive. 
// We can access individual characters of the String object using bracket notation (myName[0]) and we can also use string methods like toUpperCase() to manipulate the string. 
// This demonstrates that String objects have additional properties and methods compared to string primitives in JavaScript.

// In this example, we are creating a String object using the String constructor. 
// The typeof operator returns "object" for myName, indicating that it is an object and not a string primitive. 
// We can access individual characters of the String object using bracket notation (myName[0]) and we can also use string methods like toUpperCase() to manipulate the string. 
// This demonstrates that String objects have additional properties and methods compared to string primitives in JavaScript.

// In JavaScript, we can create strings using string literals (enclosed in single or double quotes) or by using the String constructor (new String()). 
// When we use string literals, we are creating a string primitive, which is a simple value. 
// When we use the String constructor, we are creating a String object, which is an instance of the String class and has additional properties and methods. 
// The typeof operator will return "string" for string primitives and "object" for String objects, demonstrating that they are different types in JavaScript.

// What is the difference between slice() and substring() methods in JavaScript?
// The slice() and substring() methods in JavaScript are both used to extract a portion of a string, but they have some differences in how they handle the start and end indices:
// 1. slice(start, end): The slice() method extracts a section of a string and returns it as a new string. The start index is inclusive, while the end index is exclusive. If the end index is not provided, it will extract until the end of the string. If the start index is negative, it counts from the end of the string.
// Example:
const str = "Hello, World!";
console.log(str.slice(0, 5)); // "Hello"
console.log(str.slice(7)); // "World!"
console.log(str.slice(-6)); // "World!"

// 2. substring(start, end): The substring() method also extracts a section of a string and returns it as a new string. However, it treats negative indices as 0 and does not allow for negative indexing. The start index is inclusive, while the end index is exclusive. If the end index is not provided, it will extract until the end of the string.
// Example:
const str1 = "Hello, World!";
console.log(str1.substring(0, 5)); // "Hello"
console.log(str1.substring(7)); // "World!"
console.log(str1.substring(-6)); // "Hello, World!" (negative index is treated as 0)

// In summary, slice() allows for negative indexing and can handle out-of-bounds indices gracefully, while substring() does not allow for negative indexing and treats out-of-bounds indices as 0 or the length of the string.



