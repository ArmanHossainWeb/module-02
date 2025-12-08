//* Generate a lookup table

//? Input
const postsArray = [
  { id: "p-101", title: "Intro to SQL", author: "Alex" },
  { id: "p-102", title: "Data Structures in JS", author: "Beth" },
  { id: "p-103", title: "Understanding Reduce", author: "Chris" },
  { id: "p-104", title: "CSS Grid Tricks", author: "Alex" },
];


const lookupTable = postsArray.reduce((table, post) => {
  table[post.id] = post;
  return table;
},{});


// console.log(lookupTable)




// problem 1 
const usersList = [
  { username: "arman101", age: 22, role: "admin" },
  { username: "sara_dev", age: 25, role: "editor" },
  { username: "hossainX", age: 30, role: "viewer" }
];


const tableLookup = usersList.reduce((table));