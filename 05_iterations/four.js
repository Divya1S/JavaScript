//Objects
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'switft by apple'
}

//for in loop for objects
for (const key in myObject) {
    console.log(`${key} is the shortcut for ${myObject[key]}`);
}

//For in loop for Arrays

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}

//For in loop on Map
//You should know that:
//Maps are not iterable i.e, you cannot iterate them so we get no result for this
const map = new Map()
map.set('IN', "INDIA")
map.set('US', "United States")
map.set('Fr', "France")
map.set('Eu', "Europe")
map.set('IN', "INDIA")

for (const key in map) {
    console.log(key);
}