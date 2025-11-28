const numbers = [1,5,3,9,5];

const hasEvenNumber = numbers.some((Number) => Number % 2 === 0)

// console.log(hasEvenNumber)





const currentUserRoles = ["user", "editor", "admin"];
const featureAccessRoles = ["admin", "manager"];

const canAccess = currentUserRoles.some(role => featureAccessRoles.includes(role))
// console.log(canAccess)







const arr = Array.from([1, 2, 3], (value, i) => value * value);

console.log(arr);

const range = (start, stop, step) =>
  Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, i) => start + i * step
  );

console.log(range(0, 11, 2));




