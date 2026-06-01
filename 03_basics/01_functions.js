function sayMyName() {
    console.log("D");
    console.log("I");
    console.log("V");
    console.log("Y");
    console.log("A");
}

// sayMyName //This is the reference to the function, it will not execute the function, it will just return the function definition

sayMyName(); // This will execute the function and print each letter of "DIVYA" on a new line

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}

addTwoNumbers(3,4); // This will print 7 to the console
addTwoNumbers(3, "4"); // This will print "34" to the console because the second argument is a string, so it will concatenate the two values instead of adding them as numbers
addTwoNumbers(3, "a"); // This will print "3a" to the console because both arguments are strings, so it will concatenate them instead of adding them as numbers
addTwoNumbers(3, null); // This will print 3 to the console because null is treated as 0 when used in a mathematical operation, so it will add 3 and 0 to get 3
addTwoNumbers(3, undefined); // This will print NaN to the console because undefined is not a number and cannot be used in a mathematical operation, so it will return NaN (Not a Number) when trying to add it to 3

const result = addTwoNumbers(5, 10); // This will print 15 to the console, but the variable 'result' will be undefined because the function does not return any value
console.log("Result: ", result); // This will print undefined to the console because the function does not return any value, so 'result' is assigned the value of undefined


function addThreeNumbers(number1, number2, number3) {
    let result2 = number1 + number2 + number3;
    return result2; // This will return the value of result2 to the caller of the function
    console.log("Divya"); // This line will never be executed because it is after the return statement, so it will be ignored by the JavaScript engine
}

const res = addThreeNumbers(1, 2, 3);
console.log("Result of adding three numbers: ", res); // This will print "Result of adding three numbers: 6" to the console because the function returns the value of result2, which is the sum of the three numbers passed as arguments

function loginUserMessage(username) {
    if(username === undefined){
        console.log("Please enter a username");
        return; // This will exit the function early if the username is undefined, preventing the rest of the code from executing
    }
    return `${username} just logged in` // This will return a string that includes the value of the username variable, which is passed as an argument to the function, using template literals to insert the value into the string
}

console.log(loginUserMessage("Divya")); // This will print "Divya just logged in" to the console because the function is using template literals to insert the value of the username variable into the string
console.log(loginUserMessage("")); // This will print " just logged in" to the console because the function is using template literals to insert the value of the username variable into the string
console.log(loginUserMessage()); // This will print "undefined just logged in" to the console because the function is using template literals to insert the value of the username variable into the string, and since no argument is passed, it will be undefined

function loginUserMessage2(username) {
    if(!username){ // This will check if the username is falsy (undefined, null, empty string, etc.)
        console.log("Please enter a username");
        return; // This will exit the function early if the username is falsy (undefined, null, empty string, etc.), preventing the rest of the code from executing
    }
    return `${username} just logged in` // This will return a string that includes the value of the username variable, which is passed as an argument to the function, using template literals to insert the value into the string
}

console.log(loginUserMessage2("Divya"));

function loginUserMessage3(username = "Divya") { // This will set a default value of "Divya" for the username parameter if no argument is passed when the function is called
    return `${username} just logged in` // This will return a string that includes the value of the username variable, which is passed as an argument to the function, using template literals to insert the value into the string
}

console.log(loginUserMessage3()); // This will print "Divya just logged in" to the console because the function has a default value of "Divya" for the username parameter, so when no argument is passed, it will use the default value
console.log(loginUserMessage3("Alice")); // This will print "Alice just logged in" to the console because the function is using the value of the username parameter that is passed as an argument, which is "Alice" in this case, instead of the default value of "Divya"   

//Rest operator
function sumAllNumbers(...numbers) { // This will use the rest operator to collect all the arguments passed to the function into an array called 'numbers'
    let total = 0;
    for(let number of numbers){ // This will iterate over each number in the 'numbers' array and add it to the total variable
        total += number;
    }
    return total; // This will return the total sum of all the numbers passed as arguments to the function
}

console.log(sumAllNumbers(1, 2, 3)); // This will print 6 to the console because the function will sum all the numbers passed as arguments (1 + 2 + 3) and return the result
console.log(sumAllNumbers(4, 5)); // This will print 9 to the console because the function will sum all the numbers passed as arguments (4 + 5) and return the result
console.log(sumAllNumbers(10)); // This will print 10 to the console because the function will sum all the numbers passed as arguments (10) and return the result
console.log(sumAllNumbers()); // This will print 0 to the console because the function will sum all the numbers passed as arguments (none) and return the result, which is 0 since there are no numbers to add

function calculateCartPrice(...prices) { // This will use the rest operator to collect all the arguments passed to the function into an array called 'prices'
    return prices // This will return the 'prices' array, which contains all the arguments passed to the function, instead of calculating the total price of the cart
}

console.log(calculateCartPrice(10, 20, 30)); // This will print [10, 20, 30] to the console because the function is returning the 'prices' array, which contains all the arguments passed to the function

//Interview question: What values will go in num1
function calculateCartPrice2(val1, val2, ...num1) {
    return num1; 
} 
console.log(calculateCartPrice2(200, 400, 500, 2000)) // This will print [500, 2000] to the console because the first two arguments (200 and 400) will be assigned to val1 and val2 respectively, and the rest of the arguments (500 and 2000) will be collected into the num1 array using the rest operator, which is then returned by the function
console.log(calculateCartPrice2(10, 20, 30, 40, 50, 60)) // This will print [30, 40, 50, 60] to the console because the first two arguments (10 and 20) will be assigned to val1 and val2 respectively, and the rest of the arguments (30, 40, 50, and 60) will be collected into the num1 array using the rest operator, which is then returned by the function
console.log(calculateCartPrice2(1, 2)) // This will print [] to the console because the first two arguments (1 and 2) will be assigned to val1 and val2 respectively, and since there are no additional arguments, the num1 array will be empty, which is then returned by the function

//Objects
const user = {
    name: "Divya",
    age: 25,
    email: "dira@gmail.com"
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.name} and email is ${anyobject.email}`); // This will use template literals to insert the values of the 'name' and 'email' properties of the 'anyobject' parameter into the string and print it to the console
}

handleObject(user);  // This will print "Username is Divya and email is dira@gmail.com" to the console
handleObject({
    name: "Alice",
    email: "alice@gmail.com"
})


//Arrays
const numbers = [1, 2, 3, 4, 5];

function returnSecondValue(arr) {
    return arr[1]; // This will return the second element of the array passed as an argument to the function, which is at index 1 (since array indices start at 0)
}

console.log(returnSecondValue(numbers)); // This will print 2 to the console because the second element of the 'numbers' array is 2
console.log(returnSecondValue([10, 20, 30, 40])); // This will print 20 to the console because the second element of the array [10, 20, 30, 40] is 20
console.log(returnSecondValue(["a", "b", "c"])); // This will print "b" to the console because the second element of the array ["a", "b", "c"] is "b"




