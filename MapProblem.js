const studentId = new Map()

studentId.set(101, "Arman");
studentId.set(102,"Rafi");
studentId.set(103, "Sumi")

// console.log(studentId)

const IdExsist = studentId.has(102);
// console.log(IdExsist)



const CountStudent = studentId.size;
// console.log(CountStudent)

const DeleteOne = studentId.delete(103)
// console.log(DeleteOne)
// console.log(studentId)

studentId.set(103,"Sumi")

// console.log(studentId)




const myMap = new Map([
  ["name", "Arman"],
  ["skill", "Frontend"],
  ["language", "JavaScript"]
]);


const array = [...myMap];
console.log(array)


