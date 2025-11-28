

const myMap = new Map();

myMap.set("name", "arman") // name is key and arman is value 
myMap.set("age", 20)

console.log(myMap.get("name")); // this is get operation 
console.log(myMap.get("age"));

console.log(myMap.has("name"))
console.log(myMap.has("arman"))
console.log(myMap.has("age")) // true age is value !
console.log(myMap.has(12))  // false because 12 is value not key !


console.log(myMap.size) //2


myMap.delete("name")
console.log(myMap) // Map(1) {"age" => 20}


myMap.clear();
console.log(myMap.size) // output 0 


console.log([...myMap.keys()])  


console.log(...myMap.entries()) // [ 'name', 'arman' ] [ 'age', 20 ]