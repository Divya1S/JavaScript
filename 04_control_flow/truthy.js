const userEmail = "divya@example.com" //true

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

const userEmail4 = "" //false

if (userEmail4) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

const userEmail2 = " " //true

if (userEmail2) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

const userEmail3 = [] //true

if (userEmail3) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN
// all these are falsy values 

// Note: Apart from these falsy values all other values are true values 
//truthy values 
// "0", 'false', " ", [], {}, function(){}

//For array
const userEmail5 = []

if (userEmail5.length === 0) {
    console.log("Array is empty");
}

//For objects 
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

a = false == 0;
console.log(a)

b = false == '';
console.log(b)

c = 0 == '';
console.log(c)

//Nullish Coalescing Operator (???): null undefined 

let val1;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15
val4 = null ?? 12 ?? 15

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

//Note: Remember that the Nullish Coalescing Operator is different than the Ternary Operator 

//Ternary Operator:

//condition ? true : false 

const coffeePrice = 100
coffeePrice <= 80 ? console.log("less than 80") : console.log("more than 80")


