//filter map 
const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => {
    console.log(item);
    return item;
})

// console.log(values); //Form here we can understand that for each does not return any value.

//filter
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => num > 4)
console.log(newNums)

//Now here if we apply the curly brackets we will be starting a new scope 

const myNums1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

const newNums1 = myNums1.filter( (num) => {
    num > 40
})
console.log(newNums1) //[]this returns empty bcoz whenever we introduce a scope we need to write return keyword 
//Again important to write the written keyword

//Using filter and curly brackets {}
const myNums2 = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]

const newNums2 = myNums2.filter( (num) => {
    return num > 400
})
console.log(newNums2)

//using for each
const mySum = [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010]

const newSum = []

mySum.forEach( (num) => {
    if(num > 1004) {
        newSum.push(num)
    }
})
console.log(newSum);

const books = [
  {
    title: 'Hamlet',
    genre: 'Fiction',
    publish: 1991,
    edition: 2000
  },
  {
    title: 'To Kill a Mockingbird',
    genre: 'Fiction',
    publish: 1960,
    edition: 2015
  },
  {
    title: '1984',
    genre: 'Fiction',
    publish: 1949,
    edition: 2022
  },
  {
    title: 'Pride and Prejudice',
    genre: 'Fiction',
    publish: 1813,
    edition: 2005
  },
  {
    title: 'The Great Gatsby',
    genre: 'Fiction',
    publish: 1925,
    edition: 2018
  },
  {
    title: 'The Catcher in the Rye',
    genre: 'Fiction',
    publish: 1951,
    edition: 2010
  },
  {
    title: 'Harry Potter and the Sorcerer\'s Stone',
    genre: 'Fantasy',
    publish: 1997,
    edition: 2021
  },
  {
    title: 'Dune',
    genre: 'Science Fiction',
    publish: 1965,
    edition: 2019
  },
  {
    title: 'The Hobbit',
    genre: 'Fantasy',
    publish: 1937,
    edition: 2023
  },
  {
    title: 'Educated',
    genre: 'Non-Fiction',
    publish: 2018,
    edition: 2020
  }
];

//here we are not using any scope so we did not use return word
let UserBooks = books.filter( (bk) => bk.genre === 'Fiction')

//here we are using scope {} so we used return keyword
UserBooks = books.filter( (bk) => { 
    return bk.edition >= 2000 && bk.publish >= 1950
})

console.log(UserBooks);
