const marvelHeroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye"];

// console.log(marvelHeroes);  

const dcHeroes = ["Superman", "Batman", "Wonder Woman", "Flash", "Green Lantern", "Aquaman"];

// console.log(dcHeroes);  

marvelHeroes.push(dcHeroes); // This will add the entire dcHeroes array as a single element to the marvelHeroes array

console.log(marvelHeroes[6]); 

console.log(marvelHeroes[6][2]); // Output will show the length of marvelHeroes as 7, since dcHeroes is added as a single element
console.log(marvelHeroes[6][3]); // Output will show the fourth element of the dcHeroes array

console.log(marvelHeroes); // Output will show the original marvelHeroes followed by the dcHeroes array as a single element

// To add each element of dcHeroes to marvelHeroes, we can use the spread operator
marvelHeroes.push(...dcHeroes); // This will add each element of dcHeroes individually to marvelHeroes

console.log(marvelHeroes); // Output will show all heroes from both arrays in a single array

const allHeroes = marvelHeroes.concat(dcHeroes); // This will create a new array that combines marvelHeroes and dcHeroes, but it won't modify marvelHeroes

console.log(marvelHeroes); // Output will show the original marvelHeroes array without any changes
console.log(allHeroes); // Output will show the combined array of all heroes

const all_new_heroes = [...marvelHeroes, ...dcHeroes]; // This will create a new array that combines marvelHeroes and dcHeroes using the spread operator

console.log(all_new_heroes); // Output will show the combined array of all heroes using the spread operator

const another_array = [1, 2, 3, [4, 5, 6], 7, [6,7, [4,5]]]

const real_another_array = another_array.flat(Infinity); // This will flatten the array to any depth

console.log(real_another_array); // Output will show a completely flattened array with all nested elements extracted

console.log(Array.isArray(marvelHeroes)); // Output will show true, since marvelHeroes is an array

console.log(Array.isArray("Divya")); // Output will show false, since "Divya" is a string, not an array
console.log(Array.from("Divya")); // Output will show an array of characters: ['D', 'i', 'v', 'y', 'a']

console.log(Array.from({name: "Divya"})) //Iteresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // Output will show an array containing the scores: [100, 200, 300]



