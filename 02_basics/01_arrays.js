//array
let fruits = ['apple', 'banana', 'orange'];
console.log(fruits); // ['apple', 'banana', 'orange']
console.log(fruits[0]); // 'apple'
console.log(fruits.length); // 3
fruits.push('grape');
console.log(fruits); // ['apple', 'banana', 'orange', 'grape']
fruits.pop();
console.log(fruits); // ['apple', 'banana', 'orange']
fruits.unshift('grape');
console.log(fruits); // ['grape', 'apple', 'banana', 'orange']
fruits.shift();
console.log(fruits); // ['apple', 'banana', 'orange']
fruits.splice(1, 0, 'grape');
console.log(fruits); // ['apple', 'grape', 'banana', 'orange']
fruits.splice(1, 1);
console.log(fruits); // ['apple', 'banana', 'orange']
fruits.splice(1, 1, 'grape');
console.log(fruits); // ['apple', 'grape', 'orange']
fruits.reverse();
console.log(fruits); // ['orange', 'grape', 'apple']
fruits.sort();
console.log(fruits); // ['apple', 'grape', 'orange']
console.log(fruits.indexOf('grape')); // 1
console.log(fruits.includes('grape')); // true
console.log(fruits.join(', ')); // 'apple, grape, orange'
console.log(fruits.slice(1, 3)); // ['grape', 'orange']
console.log(fruits.concat(['kiwi', 'melon'])); // ['apple', 'grape', 'orange', 'kiwi', 'melon']
console.log(fruits); // ['apple', 'grape', 'orange']
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray({})); // false    

// Note:
// Arrays create shallow copies when using methods like slice, concat, etc. 
// This means that if the array contains objects, the references to those objects are copied, not the objects themselves. 
// Therefore, changes to the objects in the original array will affect the copied array and vice versa.

const myArr = [0, 1, 2, 3, 4, 5];
console.log(myArr[0]); // 0
console.log(myArr[1]); // 1
console.log(myArr[2]); // 2
console.log(myArr[3]); // 3
console.log(myArr[4]); // 4
console.log(myArr[5]); // 5 

const superHeroes = ['Superman', 'Batman', 'Wonder Woman', 'Flash', 'Green Lantern'];
console.log(superHeroes[0]); // 'Superman'
console.log(superHeroes[1]); // 'Batman'
console.log(superHeroes[2]); // 'Wonder Woman'
console.log(superHeroes[3]); // 'Flash'
console.log(superHeroes[4]); // 'Green Lantern'

const myArr2 = new Array(1, 2, 3, 4, 5);
console.log(myArr2[0]); // 1
console.log(myArr2[1]); // 2
console.log(myArr2[2]); // 3
console.log(myArr2[3]); // 4
console.log(myArr2[4]); // 5

//Array methods
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.length); // 5
numbers.push(6);
console.log(numbers); // [1, 2, 3, 4, 5, 6]
numbers.pop();
console.log(numbers); // [1, 2, 3, 4, 5]
numbers.unshift(0); // adds an element to the beginning of the array
console.log(numbers); // [0, 1, 2, 3, 4, 5]
const removedElement = numbers.shift(); // removes the first element and returns it
console.log(removedElement); // 0
console.log(numbers); // [1, 2, 3, 4, 5]
numbers.splice(2, 0, 'a'); // adds 'a' at index 2 without removing any element
console.log(numbers); // [1, 2, 'a', 3, 4, 5]
numbers.splice(2, 1); // removes 1 element at index 2
console.log(numbers); // [1, 2, 3, 4, 5]
numbers.splice(2, 1, 'a'); // replaces 1 element at index 2 with 'a'    
console.log(numbers);  // [1, 2, 'a', 4, 5]
numbers.reverse();
console.log(numbers); // [5, 4, 'a', 2, 1]
numbers.sort();
console.log(numbers); // [1, 2, 4, 5, 'a']

console.log(numbers.indexOf(4)); // 2

console.log(numbers.includes(4)); // true

console.log(numbers.join(', ')); // '1, 2, 4, 5, a'
console.log(numbers.slice(1, 3)); // [2, 4]
console.log(numbers.concat([6, 7])); // [1, 2, 4, 5, 'a', 6, 7]
console.log(numbers); // [1, 2, 4, 5, 'a']
console.log(Array.isArray(numbers)); // true
console.log(Array.isArray({})); // false    

const newArray = myArr.join()

console.log(myArr); // [0, 1, 2, 3, 4, 5]
console.log(newArray); // "0,1,2,3,4,5"
console.log(typeof newArray); // "string"

//Slice: Important
console.log("A ", myArr); // [0, 1, 2, 3, 4, 5] (original array remains unchanged)

const myn1 = myArr.slice(1, 3); // creates a new array containing elements from index 1 to index 2 (3 is not included) of the original array

console.log(myn1); // [1, 2]
console.log("B ", myArr); // [0, 1, 2, 3, 4, 5] (original array remains unchanged)

//Splice: Important
console.log("A ", myArr); // [0, 1, 2, 3, 4, 5] (original array remains unchanged)

const myn2 = myArr.splice(1, 3); // creates a new array containing elements from index 1 to index 2 (3 is not included) of the original array

console.log("C ", myArr); // [0, 4, 5] (original array is modified)
console.log(myn2); // [1, 2, 3]
console.log("B ", myArr); // [0, 4, 5] (original array is modified)

// Which one affects the original array?
// The splice method affects the original array, while the slice method does not. 
// The slice method creates a new array based on a portion of the original array, leaving the original array unchanged. 
// In contrast, the splice method modifies the original array by adding, removing, or replacing elements.

