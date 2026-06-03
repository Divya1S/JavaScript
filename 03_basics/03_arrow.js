//Here we will use this keyword to get the current context 
//First we are creating an object
const user = {
    username: "Divya",
    price: 100,

    //Function inside an object is called a method
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to the website`)
        console.log(this)
    }
}

user.welcomeMessage //If you do this no output will be seen 

//As the welcomeMessage is a method we need to call it using parentheses to execute the function and see the output
user.welcomeMessage()

user.username = "Alice" //The value Divya above was not hardcoded, it is being accessed using the this keyword, so when we change the value of username to Alice, the welcomeMessage will reflect that change when we call it again
user.welcomeMessage() 

//If you comment out everything that is written in global scope and then run
console.log(this) //This will print the global object (window in browsers, global in Node.js) to the console because in the global scope, the value of 'this' refers to the global object, which is the top-level object that provides access to global variables and functions in JavaScript.
//So after commenting out everything in global scope, the console.log(this) will return empty object because there are no variables or functions defined in the global scope, but it will still print the global object to the console.

//Very Important line:
//When you execute it in the browser console, it will print the window object, which is the global object in browsers, and when you execute it in Node.js, it will print the global object in Node.js, which is different from the window object in browsers.

function chai() {
    let username = "Divya" //This variable is declared with 'let' inside the function, so it has local scope and is only accessible within the function, so it will not affect the value of 'username' in the global scope, which is undefined in this case because there is no variable named 'username' declared in the global scope
    console.log(this); //This will print the global object (window in browsers, global in Node.js) to the console because in a regular function (not an arrow function), the value of 'this' refers to the global object when the function is called in the global scope, so when you call the chai() function, it will log the global object to the console.
    console.log(this.username); //This will print undefined to the console because in a regular function (not an arrow function), the value of 'this' refers to the global object when the function is called in the global scope, and since there is no variable named 'username' declared in the global scope, it will return undefined when you try to access this.username.
}
chai()

// const chai = function () {
//     let username = "Divya" //This variable is declared with 'let' inside the function, so it has local scope and is only accessible within the function, so it will not affect the value of 'username' in the global scope, which is undefined in this case because there is no variable named 'username' declared in the global scope
//     console.log(this); //This will print the global object (window in browsers, global in Node.js) to the console because in a regular function (not an arrow function), the value of 'this' refers to the global object when the function is called in the global scope, so when you call the chai() function, it will log the global object to the console.
//     console.log(this.username); //This will print undefined to the console because in a regular function (not an arrow function), the value of 'this' refers to the global object when the function is called in the global scope, and since there is no variable named 'username' declared in the global scope, it will return undefined when you try to access this.username.
// }

//Arrow function 
// It does not have its own 'this' context, it inherits 'this' from the surrounding (lexical) scope. 
// So when you use an arrow function, 'this' will refer to the value of 'this' in the enclosing scope where the arrow function is defined.
const chai1 =  () => {
    let username = "Divya" 
    console.log(this); 
    console.log(this.username); 
}
chai1() //This will print the global object (window in browsers, global in Node.js) to the console because in an arrow function, the value of 'this' is inherited from the surrounding (lexical) scope, which is the global scope in this case, so when you call the chai1() function, it will log the global object to the console.

const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(5, 10)); 

//Implicit return in arrow function
// If the function body consists of a single expression, you can omit the curly braces and the 'return' keyword, and the result of that expression will be implicitly returned by the function.
const addThree = (num1, num2, num3) => num1 + num2 + num3; 
console.log(addThree(10,20,30));

//You can also write implicit in another way like this:
const multiplyTwo = (num1, num2) => (num1 * num2); //using parentheses around the expression is optional in this case, but it can help improve readability, especially when the expression is more complex, so it is a common practice to use parentheses around the expression in implicit return arrow functions.
console.log(multiplyTwo(5, 10));

//To return the object:
const createUser = (username, email) => ({ //using parentheses around the object literal is necessary in this case to distinguish it from the function body, so that the JavaScript engine knows that you are returning an object and not starting a new block of code.
    username: username,
    email: email
});
console.log(createUser("Divya", "divya@example.com"));

const addTwoNumbers = (num1, num2) => ({username: "divya"})
console.log(addTwoNumbers(5, 10)); //This will print { username: 'divya' } to the console because the addTwoNumbers function is an arrow function that implicitly returns an object with a property 'username' set to "divya", regardless of the input parameters num1 and num2, so when you call addTwoNumbers(5, 10), it will return the object { username: 'divya' } and log it to the console.

//Array using arrow function
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); 
//This will print [1, 4, 9, 16, 25] to the console because the map() method creates a new array by applying the provided arrow function (num => num * num) to each element in the 'numbers' array, which squares each number, so the resulting 'squaredNumbers' array contains the squared values of the original numbers.

//Another example of using arrow function with array methods:
const users = [
    { name: "Divya", age: 25 },
    { name: "Alice", age: 30 },
    { name: "Bob", age: 20 }
];

const userNames = users.map(user => user.name);
console.log(userNames); 
//This will print ["Divya", "Alice", "Bob"] to the console because the map() method creates a new array by applying the provided arrow function (user => user.name) to each element in the 'users' array, which extracts the 'name' property from each user object, so the resulting 'userNames' array contains only the names of the users.    

users.forEach(user => console.log(user.name));
//This will print "Divya", "Alice", and "Bob" to the console because the forEach() method executes the provided arrow function (user => console.log(user.name)) once for each element in the 'users' array, which logs the 'name' property of each user object to the console, so it will print the names of all the users in the array.