//Dates 

//Creating a date
let date = new Date();
console.log(date);

//Creating a date with a specific date and time
let specificDate = new Date('2022-01-01T00:00:00');
console.log(specificDate);

//Getting the current date and time
let now = new Date();
console.log(now);

//Getting the year, month, and day
console.log(now.getFullYear());
console.log(now.getMonth()); //Note: Months are zero-indexed (0-11)
console.log(now.getDate());

//Getting the hours, minutes, and seconds
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

//Setting a specific date and time
now.setFullYear(2023);
now.setMonth(0); //January
now.setDate(1);
now.setHours(0);
now.setMinutes(0);
now.setSeconds(0);
console.log(now);

//Getting the timestamp (milliseconds since January 1, 1970)
console.log(now.getTime());

//Creating a date from a timestamp
let timestamp = 1672531200000; //January 1, 2023
let dateFromTimestamp = new Date(timestamp);
console.log(dateFromTimestamp);

//Comparing dates
let date1 = new Date('2022-01-01');
let date2 = new Date('2023-01-01');
console.log(date1 < date2); //true
console.log(date1 > date2); //false
console.log(date1 === date2); //false (compares object references, not values)
console.log(date1.getTime() === date2.getTime()); //false (compares timestamps)

//Formatting dates
console.log(now.toDateString()); // "Sun Jan 01 2023"
console.log(now.toTimeString()); // "00:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(now.toISOString()); // "2023-01-01T00:00:00.000Z"
console.log(now.toLocaleDateString()); // "1/1/2023" (format may vary based on locale)
console.log(now.toLocaleTimeString()); // "12:00:00 AM" (format may vary based on locale)
console.log(now.toLocaleString()); // "1/1/2023, 12:00:00 AM" (format may vary based on locale)
console.log(now.toLocaleString("en-US")); // "1/1/2023, 12:00:00 AM" (format may vary based on locale)
console.log(now.toJSON()); // "2023-01-01T00:00:00.000Z" (returns a string representing the Date object in JSON format)

console.log(date.toString()); // "function Date() { [native code] }" (returns a string representing the Date function)

console.log(typeof date); // "function" (the Date constructor is a function)

let myCreatedDate = new Date(2026, 4, 29) // Note: Months are zero-indexed, so 4 represents May
console.log(myCreatedDate); // "Fri May 29 2026 00:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(myCreatedDate.toDateString()); // "Fri May 29 2026"


let myCreatedDate1 = new Date(2026, 4, 29, 9, 6) // Note: Months are zero-indexed, so 4 represents May
console.log(myCreatedDate1); // "Fri May 29 2026 09:06:00 GMT+0000 (Coordinated Universal Time)"
console.log(myCreatedDate1.toDateString()); // "Fri May 29 2026"

let myCreatedDate3 = new Date("2026-01-15")
console.log(myCreatedDate3); // "Fri Jan 15 2026 00:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(myCreatedDate3.toDateString()); // "Fri Jan 15 2026"

let myTimeStamp = Date.now()
console.log(myTimeStamp); // returns the number of milliseconds since January 1, 1970
console.log(myCreatedDate.getTime()); // returns the number of milliseconds since January 1, 1970 for the specified date

console.log(Math/floor(Date.now() / 1000)); // returns the number of seconds since January 1, 1970
console.log(Math/floor(myCreatedDate.getTime() / 1000)); // returns the number of seconds since January 1, 1970 for the specified date
console.log(Math/floor(Date.now() / 1000) - Math/floor(myCreatedDate.getTime() / 1000)); // returns the number of seconds between the current date and the specified date

let newDate = new Date()
console.log(newDate); // returns the current date and time
console.log(newDate.getMonth() + 1); // returns the current month (0-11, so we add 1 to get the correct month number)
console.log(newDate.getDay()); // returns the current day of the week (0-6, where 0 is Sunday and 6 is Saturday)

`${newDate.getDay()}` // returns the current day of the week as a string (0-6, where 0 is Sunday and 6 is Saturday)

newDate.toLocaleString('default', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
}) // returns the current date in a long format (e.g., "Monday, January 1, 2023")

newDate.toLocaleString('default', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric' 
})// returns the current date in a short format (e.g., "Mon, Jan 1, 2023")

newDate.toLocaleString('default', {
    weekday: 'narrow',
    month: 'narrow',
    day: 'numeric',
    year: 'numeric' 
})// returns the current date in a narrow format (e.g., "M, J 1, 2023") 






