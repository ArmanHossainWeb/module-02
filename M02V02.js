//? Input
const products = [
  {
    id: 'p-101',
    productName: 'Wireless Headphones',
    category: 'Electronics',
    price: 120,
    rating: 4.7,
    stock: 25,
  },
  {
    id: 'p-102',
    productName: 'Mechanical Keyboard',
    category: 'Computers',
    price: 80,
    rating: 4.4,
    stock: 40,
  },
  {
    id: 'p-103',
    productName: 'Smart Watch',
    category: 'Wearables',
    price: 150,
    rating: 4.6,
    stock: 18,
  },
  {
    id: 'p-104',
    productName: 'Gaming Mouse',
    category: 'Computers',
    price: 45,
    rating: 4.2,
    stock: 75,
  },
  {
    id: 'p-105',
    productName: 'Desk Lamp',
    category: 'Home',
    price: 35,
    rating: 4.0,
    stock: 50,
  },
  {
    id: 'p-106',
    productName: 'Bluetooth Speaker',
    category: 'Electronics',
    price: 70,
    rating: 4.3,
    stock: 32,
  },
  {
    id: 'p-107',
    productName: 'Running Shoes',
    category: 'Fashion',
    price: 60,
    rating: 4.1,
    stock: 100,
  },
  {
    id: 'p-108',
    productName: 'Water Bottle',
    category: 'Accessories',
    price: 20,
    rating: 3.9,
    stock: 150,
  },
  {
    id: 'p-109',
    productName: 'Noise Cancelling Earbuds',
    category: 'Electronics',
    price: 90,
    rating: 4.8,
    stock: 15,
  },

  {
    id: 'p-110',
    productName: 'Graphic Tablet',
    category: 'Design',
    price: 200,
    rating: 4.5,
    stock: 12,
  },
  {
    id: 'p-111',
    productName: 'Noise  Earbuds',
    category: 'Electronics',
    price: 100,
    rating: 4.98,
    stock: 20,
  },
  {
    id: 'p-112',
    productName: 'Cancelling Earbuds',
    category: 'Electronics',
    price: 140,
    rating: 5.8,
    stock: 15,
  },
]

// output

const topElectronicProducts = products
  .filter((item) => item.category === 'Electronics')
  .sort((a, b) => a.price - b.price)
  .slice(0, 3)
  .map((item) => {
    return { name: item.category }
  })
console.log(topElectronicProducts)

// const topElectronicProducts = products
//   .filter((item) => item.category === "Electronics")
//   .sort((a, b) => a.price - b.price)
//   .slice(0, 3)
//   .map((item) => {
//     return { name: item.productName };
//   });
// console.log(topElectronicProducts);
