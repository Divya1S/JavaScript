// const tinderUser = new Object(); //This is singleton object, it will create an empty object

const tinderUser = {} //This is non-singleton object, it will create a new object every time it is called 

tinderUser.name = "Sam";
tinderUser.age = 25;
tinderUser.isLoggedIn = false;
tinderUser.lastLoginDays = ["Monday", "Tuesday", "Wednesday"];

console.log(tinderUser); 

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullName: {
            firstName: "Divya",
            lastName: "Rajput"
        }
    },
    age: 30,
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Wednesday", "Friday"]
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userFullName.firstName); // Output: Divya
console.log(regularUser.fullname.userFullName.lastName); // Output: Rajput  

console.log(regularUser.fullname?.userFullName?.firstName); // Output: Divya
console.log(regularUser.fullname?.userFullName?.middleName); // Output: undefined, since middleName does not exist in the object

// Combining objects 
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

const obj3 = { obj1, obj2 };
console.log(obj3); // Output will show obj1 and obj2 as properties of obj3, but it will not combine the key-value pairs of obj1 and obj2 into a single object

const obj4 = {...obj1, ...obj2}; // This will combine the key-value pairs of obj1 and obj2 into a single object
console.log(obj4); // Output will show a single object with all key-value pairs from both obj1 and obj2

const obj5 = Object.assign({}, obj1, obj2); // This will also combine the key-value pairs of obj1 and obj2 into a single object, but it will not modify obj1 or obj2
console.log(obj5); // Output will show a single object with all key-value pairs from both obj1 and obj2

//Many times we get values form database 
const databaseUser = [
    {
        name: "Divya",
        age: 25,
        isLoggedIn: true
    },
    {
        name: "John",
        age: 30,
        isLoggedIn: false
    },
    {
        name: "Alice",
        age: 28,
        isLoggedIn: true
    }
]

databaseUser[1].isLoggedIn = true; // This will change the isLoggedIn property of the second user (John) to true

console.log(tinderUser); 

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // This will show an array of key-value pairs for the tinderUser object

console.log(tinderUser.hasOwnProperty("name")); // Output will show true, since the tinderUser object has the property "name"
console.log(tinderUser.hasOwnProperty("email")); // Output will show false, since the tinderUser object does not have the property "email"

