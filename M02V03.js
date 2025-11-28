// sort string or Number 
const fruits = ["banana", "apple", "cherry"];
console.log(fruits.sort());


const scores = [40, 50, 60, 80, 95, 100];
console.log(scores.sort())



// ascending sort 
const aseNumber = [10, 15, 2, 40, 95, 80];
aseNumber.sort((a,b) => a - b)
console.log(aseNumber)


// descending 
const desNumber = [10, 15, 2, 40, 95, 80];
desNumber.sort((a,b)=> b-a)
console.log(desNumber)



// case sensitive string 
const casFruits = ["banana", "apple", "Cherry"];
fruits.sort((a,b) => a.localeCompare(b));
console.log(fruits)



// nested array flat 
const arr = [1,2,3,[4,5, [6,7,[8,9],[10]]]];
const flatArr = arr.flat(Infinity);
console.log(flatArr)