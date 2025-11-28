const products = [
  { id: "p-001", name: "Laptop", price: 1200, quantity: 5 },
  { id: "p-002", name: "Smartphone", price: 800, quantity: 10 },
  { id: "p-003", name: "Headphones", price: 150, quantity: 20 },
  { id: "p-004", name: "Keyboard", price: 70, quantity: 15 },
  { id: "p-005", name: "Mouse", price: 40, quantity: 25 },
];

const subTotal = products.reduce((subTotal, item) => {
    return subTotal + (item.price * item.quantity);
}, 0);