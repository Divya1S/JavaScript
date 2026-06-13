//Object Literals
const user = {
    username: "Divya",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log(`LoginCount: ${this.loginCount}`);
        //console.log(this);
    }
}

console.log(user.username);
console.log(user.getUserDetails());
//console.log(this);

const user2 = {
    username: "Pooja",
    loginCount: 10,
    signedIn: false,

    getUser2Details: function(){
        //console.log("Got user details from database");
        console.log(`LoginCount: ${this.loginCount}`);
        //console.log(this);
    }
}

console.log(user2.username);
console.log(user2.getUser2Details());

//Constructor Function

function rootUser(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

// const userOne = rootUser("Dira", 15, true);
// const userTwo = rootUser("Jane", 22, false);
// console.log(userOne); //here userTwo overwrite userOne 
//This is not a good practice at all

//This is the importance of new keyword 
const userOne = new rootUser("Dira", 15, true);
const userTwo = new rootUser("Jane", 22, false);
console.log(userOne.constructor); 
console.log(userTwo);

// The Refined 4-Step Process of new
// 1. Creation of the Object
// 1. Instantiation (Object Creation)
// A brand-new, empty plain JavaScript object is created in memory.
// Example: {}

// 2. Prototype Linking
// The engine links this newly created object's internal prototype property (__proto__) to the constructor function's .prototype property.
// This establishes the prototype chain, allowing the new object to inherit methods and properties defined on the constructor's prototype.

// 3. this Binding & Execution
// The constructor function is executed with the arguments you passed.
// The execution context's this keyword is bound to the newly created object from Step 1.
// Any properties or methods assigned to this inside the function (e.g., this.name = name) are directly written onto the new object.

// 4. Implicit Return
// If the constructor function does not explicitly return its own object, JavaScript automatically returns the newly created object (this).
// (Note: If the constructor explicitly returns a primitive value like a string or number, it is ignored, and this is still returned).

// 🦸‍♂️ THE SUPERHERO FACTORY (Constructor Function)
function Superhero(realName, heroName, power) {
    // [Step 1 & 2 happen secretly in the background]: 
    // A blank canvas object {} is created and linked to the Superhero prototype.

    // [Step 3]: 'this' points to the new blank canvas. We paint the traits onto it!
    this.realName = realName;
    this.heroName = heroName;
    this.power = power;

    this.activatePower = function() {
        console.log(`${this.heroName} uses ${this.power}! ⚡💥`);
    };

    // [Step 4 happens secretly in the background]: 
    // The fully loaded superhero is automatically shipped out (returned).
}

// 🚀 BRINGING THEM TO LIFE WITH 'NEW'
const hero1 = new Superhero("Bruce Wayne", "Batman", "Unfathomable Wealth 💳");
const hero2 = new Superhero("Peter Parker", "Spider-Man", "Web-Slinging 🕷️");

// Let's test our new instances!
console.log(hero1);
console.log(hero1.heroName); // Output: Batman
hero2.activatePower();       // Output: Spider-Man uses Web-Slinging 🕷️! ⚡💥

//instanceof

// To understand instanceof, think of it as a Security Badge Scanner or a DNA Test for your objects. It checks if an object belongs to a specific family tree (constructor).

// Staying with our superhero theme, let's say we have two different superhero teams: the Avengers and the Justice League.

// 🏢 TEAM CONSTRUCTORS
function Avenger(name) {
    this.name = name;
}

function JusticeLeaguer(name) {
    this.name = name;
}

// 🦸‍♂️ SPAWNING THE HEROES
const ironMan = new Avenger("Tony Stark");
const batman = new JusticeLeaguer("Bruce Wayne");

// 🚨 THE SECURITY SCANNER (Using instanceof)

// Is Iron Man allowed in the Avengers HQ?
console.log(ironMan instanceof Avenger);        // Output: true ✅ (Access Granted)

// Is Batman an Avenger?
console.log(batman instanceof Avenger);         // Output: false ❌ (Access Denied! Intruder Alert!)

// Is Batman in the Justice League?
console.log(batman instanceof JusticeLeaguer);  // Output: true ✅ (Access Granted)

console.log(ironMan instanceof Object); //true
console.log(batman instanceof Object); //true

// Why this is easy to remember
// Behind the scenes, instanceof doesn't just guess by the object's properties; it looks at the DNA (The Prototype Chain).

// When you run ironMan instanceof Avenger, JavaScript takes the ironMan object and asks: "Hey, if I follow your prototype trail backward, do I eventually bump into Avenger.prototype?" 
// If the answer is yes, it returns true. If it checks all the way to the end of the chain and doesn't find it (like checking Batman for Avenger DNA), it returns false.

// Bonus Fact: Every custom object you make in JavaScript is also an instanceof Object because all roads eventually lead back to the granddaddy of all built-in blueprints: the global Object. 
// Try running console.log(ironMan instanceof Object);—it will return true!

