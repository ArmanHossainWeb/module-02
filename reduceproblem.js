
// 1. মোট quantity বের করো 
const items = [
  { name: "Pen", quantity: 10 },
  { name: "Book", quantity: 5 },
  { name: "Bag", quantity: 2 }
];


const TotalQuantity = items.reduce((BestQuantity, item) => {
    return BestQuantity + item.quantity;
},0)

// console.log(TotalQuantity)



// 2. সব প্রোডাক্টের মোট দাম (quantity × price) বের করো 
const cart = [
  { name: "Monitor", price: 200, quantity: 2 },
  { name: "Keyboard", price: 50, quantity: 1 }
];


const TotalPrice  = cart.reduce((bestPrice, item) => {
    // console.log(bestPrice, item)
    return bestPrice + (item.price * item.quantity)
}, 0)

// console.log(TotalPrice)



// 3. Highest age খুঁজে বের করো 
const users = [
  { name: "Arman", age: 21 },
  { name: "Nayeem", age: 25 },
  { name: "Rafi", age: 20 }
];


const TopAge = users.reduce((bestAge, item) => {
    if(bestAge.age > item.age){
        return bestAge;
    }
    return item;
}, users[0])

// console.log(TopAge)

