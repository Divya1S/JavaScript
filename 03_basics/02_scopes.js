let a = 10
const b = 20
var c = 30

console.log(a); // This will print 10 to the console because the variable 'a' is declared with the value 10
console.log(b); // This will print 20 to the console because the variable 'b' is declared with the value 20
console.log(c); // This will print 30 to the console because the variable 'c' is declared with the value 30

// var c = 40
// console.log(c); // This will print 40 to the console because the variable 'c' is redeclared and assigned a new value of 40, which overwrites the previous value of 30
let a1 = 50

if (true) {
    let a1 = 100
    const b1 = 200
    console.log("Inside block: ", a1); // This will print "Inside block: 100" to the console because the variable 'a1' declared with 'let' inside the block has a different scope than the 'a1' declared outside the block, so it does not affect the value of 'a1' outside the block
}

console.log(a1); 
// console.log(b1);
// console.log(c1); 

//Explaining global scope and local scope using for loop
for (let i = 0; i < 5; i++) {
    console.log(i); // This will print the numbers 0 to 4 to the console because the variable 'i' is declared with 'let' inside the for loop, which gives it block scope, so it is only accessible within the loop and not outside of it
}

// console.log(i); // This will throw a ReferenceError because the variable 'i' is not defined outside the for loop, as it has block scope due to being declared with 'let'

function testFunction() {
    let x = 10
    console.log(x); // This will print 10 to the console because the variable 'x' is declared with 'let' inside the function, which gives it local scope, so it is only accessible within the function and not outside of it
}

testFunction();
// console.log(x); // This will throw a ReferenceError because the variable 'x' is not defined outside the function, as it has local scope due to being declared with 'let' inside the function 

// The scope through browser console is different than the node console because in the browser console, variables declared with 'var' are added to the global scope (window object), while in Node.js, they are not added to the global scope. 
// This means that in the browser console, you can access variables declared with 'var' from anywhere, while in Node.js, you cannot access them outside of their respective scopes.