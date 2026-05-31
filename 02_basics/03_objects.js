//singleton 
Object.create(null)
//Singleton is a design pattern that restricts the instantiation of a class to a single instance and provides a global point of access to that instance. 
// In JavaScript, we can create a singleton object using an object literal or by using a constructor function.

const mySym = Symbol("key1")

//object literals
const JsUser = {
    name: "Divya",
    "full name": "Divya Rajput",
    [mySym]: "mykey1", // This will create a property with the key as the value of mySym and the value as "mykey1"
    age: 25,
    email: "divya@example.com",
    location: "Los Angeles",
    isAdmin: true,
    lastLoginDays: ["Monday", "Wednesday", "Friday"]
}
//One way to access the properties of an object is using dot notation
console.log(JsUser.name); // Output: Divya

//Another way to access which one should know
console.log(JsUser["location"]); // Output: Los Angeles

console.log(JsUser["full name"]); // Output: Divya Rajput

console.log(JsUser.mySym); // Output: mykey1
console.log(typeof JsUser.mySym); // Output: string

JsUser.email = "divya.updated@example.com"
console.log(JsUser.email); // Output: divya.updated@example.com

// Object.freeze(JsUser) // This will make the JsUser object immutable, meaning you cannot add, delete, or modify any properties of the object

JsUser.age = 30; // This will not change the age property since the object is frozen
console.log(JsUser.age); // Output: 25

JsUser.isAdmin = false; // This will not change the isAdmin property since the object is frozen
console.log(JsUser.isAdmin); // Output: true

//Functions 
JsUser.greeting = function() {
    console.log("Hello JS user");
}

console.log(JsUser.greeting); // Output: undefined, since the function is added as a property of the JsUser object

JsUser.greeting2 = function() {
    console.log(`Hello JS user, ${this.name}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());





