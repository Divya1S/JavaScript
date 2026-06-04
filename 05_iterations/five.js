//For each loop 
const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){
    console.log(val);
})

//using arrow function with 
const movies = ["Inception", "Dune", "Interstellar", "Matrix"]
movies.forEach( (item) => {
    console.log(item);
})

//Now we will write a function:
function printMe(item) {
    console.log(item);
}

coding.forEach(printMe)

//Use of forEach
coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
})

//We have an array and inside array we have 3 objects 
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})
