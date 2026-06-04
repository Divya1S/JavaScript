//for of 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`Each character is, ${greet}`)
}

//Map
//Map stores unique values 

const map = new Map()
map.set('IN', "INDIA")
map.set('US', "United States")
map.set('Fr', "France")
map.set('Eu', "Europe")
map.set('IN', "INDIA")

// console.log(map)

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

//Object (This particular for of loop structure does not work for iterating objects)
// const myObject = {
//     'game1': 'Subway Surfers',
//     'game2': 'Hill Climbing',
//     'game3': 'GTA'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

