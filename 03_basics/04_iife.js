//Immediately Invoked Function Expression (IIFE)
// An IIFE is a JavaScript function that runs as soon as it is defined. 
// It is a design pattern that is also known as a Self-Executing Anonymous Function and contains two major parts: the first is the anonymous function with lexical scope enclosed within the Grouping Operator (), and the second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.
//We dont want to pollute the global scope with variables, so we can use an IIFE to create a new scope for our variables and avoid conflicts with other code in the global scope.

// function chai() {
//     console.log(`DB CONNECTED`);
// }
// chai()

//This is a named IIFE
(function chai() {
    console.log(`DB CONNECTED`);
} )(); //It is imp to use semicolon at the end of an IIFE because if you dont use it, it can cause issues when you have multiple IIFEs or when you have other code that follows the IIFE, as it can lead to syntax errors or unexpected behavior. So it is a good practice to always use a semicolon at the end of an IIFE to ensure that it is properly terminated and does not interfere with other code.

// ()()
// () => this first parantheis is for the function definition
// () => this second parenthesis is for invoking the function immediately after its definition

( function second() {
    console.log(`DB CONNECTED TWO`);
} )();

( () => {
    console.log(`DB CONNECTED THREE`);
})();

//THIS IS SIMPLE IIFE WITH PARAMETER 
( (name) => {
    console.log(`DB CONNECTED THREE ${name}`);
})("John");