// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 5
//To copy the selected code syntax easily using shortcut 
//Copy, (Shift + Option + Down arrow)

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break;
    case 4:
        console.log("Apr");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;

    default:
        console.log("default case match")
        break;
}

// Why are we giving a break statement ?
// We are giving break because say once the May is executed and suppose we remove break all all the checks after it,
// then as JavaScript is old school language it will execute all the lines after it. So break is necessary

//In case of string 
const month1 = "Mar"

switch (month1) {
    case "Jan":
        console.log("January");
        break;
    case "Feb":
        console.log("Feb");
        break;
    case "Mar":
        console.log("Mar");
        break;
    case "Apr":
        console.log("Apr");
        break;
    case "May":
        console.log("May");
        break;
    case "June":
        console.log("June");
        break;
    case "July":
        console.log("July");
        break;

    default:
        console.log("default case match")
        break;
}