//If statement
const isUserloggedIn = true

if ( 2 == "2" ) {
    console.log("executed")
    
}

// >, <, <=, >=. == (This is for comparsion check), !=
// = (this is for assignment)

const isUserloggedIn1 = true

if ( 2 === "2" ) {
    console.log("executed") 
}
else console.log("not executed")

const isUserloggedIn3 = true

if ( 2 != 3 ) {
    console.log("yay executed") 
}
else console.log("nah executed")

const UserloggedIn = true
const temperature = 10

if (temperature < 25) {
    console.log("Temp is less than 25")
} else {
    console.log("Temp is greater than 25")
}
console.log("I dont know the temp")

const score = 500

if (score > 200) {
    const power = "fly"
    console.log(`User power: ${power}`);
}
//using const or let keyword if we declare any variable inside the {the block scope} it can be accessed in the block scope only
//If we try to access it out of the block scope then error will occur
// console.log(`User power: ${power}`); //IF we run this it will give us the output that power is not defined

const score1 = 100

if (score1 < 200) {
    var power = "walk"
    console.log(`User power: ${power}`);
}
console.log(`User power: ${power}`); //this gets accessed outside coz we are using var keyword to initialize the variable in the block scope 
//The scope of the var keyword is global 

//Example of implicit scope
const balance = 1000
if (balance > 500) console.log("test")

//This can be written in one more way but it is not recommended and appreciated at company level
// const balance = 1000
// if (balance > 500) console.log("test"), 
// console.log("test2");
//Same this syntax of code is not appreciated
// const balance = 1000
// if (balance > 500) console.log("test"), console.log("test2");

const bal = 1000

if (bal < 500) {
    console.log("less than 500");
} else if (bal < 750) {
    console.log("less than 759");
} else if (bal < 900) {
    console.log("less than 900")
} else {
    console.log("less than 1200")
}

//Real life use 
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow user to by course")
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
