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


