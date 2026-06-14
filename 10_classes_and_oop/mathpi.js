//Now we know object

// console.log(Math.PI); 
// Math.PI = 5
// console.log(Math.PI)
// The value of PI it does not gets overwritten 

const decripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(decripter);

const laptop = {
    name: 'macbook',
    price: 2000,
    isAvaialble: true,

    orderLaptop: function(){
        console.log("Sorry was not able to order laptop");
    }
}

console.log(laptop);
console.log(Object.getOwnPropertyDescriptor(laptop, "name"));

Object.defineProperty(laptop, 'name', {
    //writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(laptop, "name"));

for (let [key,value] of Object.entries(laptop)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}

