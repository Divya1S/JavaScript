class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `User ID is : ${Math.floor(Math.random() * 1000 + 1)}`
    }
}

const divya = new User("divya")
// console.log(divya.createId());

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.eamil = email
    }
}

const teacher = new Teacher("ted", "ted@example.com")
teacher.logMe();
console.log(teacher.createId());

// Class-Level Only: Static properties and methods belong directly to the class, not to the objects (instances) created by it.

// Call via Class Name: You call them using the class name: ClassName.staticMethod().

// Instances Blocked: Object instances cannot access static members. Attempting to call instance.staticMethod() throws a TypeError.

// Class Inheritance: Subclasses do inherit static methods from parent classes (e.g., ChildClass.staticMethod() works).

// The this Pivot: Inside a static method, the this keyword refers to the class itself, not an instance of the class.

// Best Use Cases: Utility functions (like Math.floor()), global configurations, or factory methods that create instances.

// Dual Support: You can declare both static functions (static method() {}) and static variables (static property = value).