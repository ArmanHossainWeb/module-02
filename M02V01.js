const studentName = new Map([
    ["name1", "Arman"],
    ["name2", "Riyad"]
]);


// map.set 
studentName.set("name3", "arman");
studentName.set("name4", "Hossain");
console.log(studentName);


// map.size 
console.log(studentName.size)

// convert map to array 
const array = [...studentName];
console.log(array)

// map.get 

const getStudent1 = studentName.get("name3");
console.log(getStudent1);

const getStudent2 = studentName.get("name4");
console.log(getStudent2);



// map.has 
const hasMethod1 = studentName.has("name2");
console.log(hasMethod1)

const hasMethod2 =studentName.has("name4");
console.log(hasMethod2);

const hasMethod3 =studentName.has("name5");
console.log(hasMethod3);


// map.delete 

const delete1 = studentName.delete("name4");
console.log(delete1)
console.log(studentName);


// map.clear 
const clear1 = studentName.clear()
console.log(clear1)
console.log(studentName);



