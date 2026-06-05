//map function 
//It is better than for each
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.map( (num) =>  num + 10)

console.log(newNums)

//Here I am applying scope but not using return keyword
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map( (num) =>  {num + 10})

// console.log(newNums)

//Here I am applying scope and also using a return function
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map( (num) =>  {return num + 10})

// console.log(newNums)

//Chaining
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNumbers = myNumbers
                    .map( (num) => num * 10 )
                    .map( (num) => num + 1 ) 
                    .filter( (num) => num >= 40)
console.log(newNumbers);