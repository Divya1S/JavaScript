//ES6 
//Classes

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password
    }

    //method
    encryptPassword() {
        return `${this.password}abc`
    }

    //method
    changeUsername(){
        return  `${this.username.toUpperCase()}`
    }
}

const user1 = new User("divya", "divya@example.com", "123");

console.log(user1.encryptPassword());
console.log(user1.changeUsername());

//behind the scene
function User2(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password
}

User.prototype.encryptPassword = function(){
        return `${this.password}abc`
}

User.prototype.changeUsername = function(){
        return `${this.username.toUpperCase()}`
}

const user2 = new User("pooja", "pooja@example.com", "987")

console.log(user2.encryptPassword());
console.log(user2.changeUsername());