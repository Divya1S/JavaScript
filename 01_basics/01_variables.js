const accountId = 111234
let accountEmail = "divya@google.com"
var accountPassword = "1234"
accountCity = "Los Angeles" //This should not be used but a variable can be declared in this way as well
let accountState;

//accountId = 21 //not allowed 

// {
//     Scope
// }

// Initially same variable is used then the first variable would change 

accountEmail = "pooja@gmail.com"

accountPassword = "98768456"

accountCity = "NewYork"

console.log(accountId);

console.log(accountEmail);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var 
because of issue in block scope and funtional scope
*/

