import Product from "../models/Product";

const newProduct: Product = {
  id: 0,
  dateCreated: new Date().toLocaleDateString(),
  name: "",
  price: 0.0,
};

// const fetchProducts = async (): Promise<Product[]> => {
//   const response = await fetch("/api/products", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// }

const mockProducts: Product[] = [
  {
    id: 1,
    dateCreated: new Date().toLocaleDateString(),
    name: "test",
    price: 10.0,
  },
  {
    id: 2,
    dateCreated: new Date().toLocaleDateString(),
    name: "test",
    price: 10.0,
  },
  {
    id: 3,
    dateCreated: new Date().toLocaleDateString(),
    name: "test",
    price: 10.0,
  },
];

export { mockProducts, newProduct };
