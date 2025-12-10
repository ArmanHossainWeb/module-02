const students = new Map([
  ["arman", 85],
  ["sajid", 76],
  ["tania", 92],
  ["rahim", 59]
]);


// return only students whose marks ≥ 80 
const filtered = new Map();

for (const [name, marks] of students) {
    if(marks >= 80){
        filtered.set(name, marks)
    }
}

console.log(filtered)
