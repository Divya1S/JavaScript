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

//Object destructuring and JSON API

const course = {
    courseName: "JavaScript",
    price: 999,
    courseInstructor: "Divya"
}
//course.courseInstructor

const {courseInstructor : instructor} = course;
console.log(instructor); // Output will show "Divya", since we have destructured the courseInstructor property from the course object and assigned it to a variable with the same name

//React props and objects destructuring
const navbar = ({company}) => {

}
navbar(company = "Divya's Company"); // This will pass the company

API: 
//JSON format

{
    "name": "Divya",
    "age": 25,
    "isLoggedIn": true
}

//Sometimes you can also get the APIs in the form of array
[
    {
        "name": "Divya",
        "age": 25,
        "isLoggedIn": true
    },
    {
        "name": "John",
        "age": 30,
        "isLoggedIn": false
    },
    {
        "name": "Alice",
        "age": 28,
        "isLoggedIn": true
    }
]

//API from randomuser.me, which provides random user data in JSON format

{
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Jennie",
        "last": "Nichols"
      },
      "location": {
        "street": {
          "number": 8929,
          "name": "Valwood Pkwy",
        },
        "city": "Billings",
        "state": "Michigan",
        "country": "United States",
        "postcode": "63104",
        "coordinates": {
          "latitude": "-69.8246",
          "longitude": "134.8719"
        },
        "timezone": {
          "offset": "+9:30",
          "description": "Adelaide, Darwin"
        }
      },
      "email": "jennie.nichols@example.com",
      "login": {
        "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
        "username": "yellowpeacock117",
        "password": "addison",
        "salt": "sld1yGtd",
        "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
        "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
        "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
      },
      "dob": {
        "date": "1992-03-08T15:13:16.688Z",
        "age": 30
      },
      "registered": {
        "date": "2007-07-09T05:51:59.390Z",
        "age": 14
      },
      "phone": "(272) 790-0888",
      "cell": "(489) 330-2385",
      "id": {
        "name": "SSN",
        "value": "405-88-3636"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/75.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
      },
      "nat": "US"
    }
  ],
  "info": {
    "seed": "56d27f4a53bd5441",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}

//To understand it you can use JSON formatter, which will format the JSON data in a more readable way. You can also use console.log to log the data in the console and see the structure of the data.
// Copy and paste the below JSON data in the console:
{"results":[{"gender":"male","name":{"title":"Mr","first":"Victor","last":"Ambrose"},"location":{"street":{"number":8761,"name":"Argyle St"},"city":"Hudson","state":"Prince Edward Island","country":"Canada","postcode":"L7Q 9W3","coordinates":{"latitude":"-67.7071","longitude":"-19.9525"},"timezone":{"offset":"-12:00","description":"Eniwetok, Kwajalein"}},"email":"victor.ambrose@example.com","login":{"uuid":"e00e27b1-3b20-401f-8943-3a4a19d64dea","username":"brownduck301","password":"mandrake","salt":"nRlacf8d","md5":"e7fb181cd63fa96c7bc9231961b09adc","sha1":"0b3da6cecca132fe2abd6f03279112bc2505dcfa","sha256":"5d1f77da6240c40850fa767d65a48ceb9f186a8b4f81c9d79dfb9c899cc0b2fd"},"dob":{"date":"1981-01-06T09:24:07.527Z","age":45},"registered":{"date":"2007-08-05T12:07:37.419Z","age":18},"phone":"C58 K38-9602","cell":"X51 I48-6616","id":{"name":"SIN","value":"653984419"},"picture":{"large":"https://randomuser.me/api/portraits/men/63.jpg","medium":"https://randomuser.me/api/portraits/med/men/63.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/63.jpg"},"nat":"CA"}],"info":{"seed":"23e5e15460a22c78","results":1,"page":1,"version":"1.4"}}

// And you can see its structure in Code, Form, Text, Tree and View format.

