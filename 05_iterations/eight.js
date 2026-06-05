//reduce 
const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval){
    console.log(`accumulator value: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)

console.log(myTotal);

const myNums1 = [10, 20, 30]

const myTotal1 = myNums1.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal1)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },

]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay)