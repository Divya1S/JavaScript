function SetUsername(username){
    //complex DB calls
    this.username = username
}

function createUser(username, email, password){
    SetUsername.call(this, username) //.call method is used to hold the reference, this is used along with is to access the username from the SetUsername function

    this.email = email
    this.password = password

}

const chai = new createUser("chai", "chai@example.com", "12345")
console.log(chai);