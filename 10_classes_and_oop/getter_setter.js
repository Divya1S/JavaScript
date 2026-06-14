// class User{
//     constructor(email, password){
//         this.email = email;
//         this.password = password
//     }

//     get password(){
//         return this._password.toUpperCase()
//     }

//     set password(value){
//         this._password = value
//     }
// }

// const divya = new User("divya@example.com", "asdfd")
// console.log(divya.password)

// class User{
//     constructor(email, password){
//         this.email = email;
//         this.password = password
//     }

//     get password(){
//         return `${this._password}divya`
//     }

//     set password(value){
//         this._password = value
//     }
// }

// const divya = new User("divya@example.com", "asdfd")
// console.log(divya.password)

class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}divya`
    }

    set password(value){
        this._password = value
    }
}

const divya = new User("divya@example.com", "asdfd")
console.log(divya.password)
console.log(divya.email)