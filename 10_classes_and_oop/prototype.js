// let myName = "divya   "
// let myGithub = "dira   "

// console.log(myName.trueLength);

// Array -> Object -> null
// String -> Object -> null
// Function -> Object -> null

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.divya = function(){
    console.log(`divya is present in all objects`);
}

Array.prototype.heyDivya = function(){
    console.log(`Divya says hellloooo`)
}

//heroPower.divya(); //object has this property
myHeros.divya() //now array also has this property
myHeros.heyDivya(); //array has access to this property 
//heroPower.heyDivya(); //but object wont be having access to this property

//Inheritance
const User = {
    name: "Cristen",
    email: "cristen@example.com",
}
const Teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable: false,
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport,
}

Teacher.__proto__ = User;

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "Green     ";

String.prototype.trueLength = function() {
    console.log(`${this}`);
    //console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength();

"divya".trueLength()
"iceTea".trueLength()

