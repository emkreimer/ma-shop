import Product from "../models/Product";

const apiUrl = import.meta.env.VITE_API_URL;
const token = localStorage.getItem("token");

const newProduct: Product = {
  id: null,
  dateCreated: new Date().toLocaleDateString(),
  name: "",
  price: 0.0,
};

const createProduct = async (product: Product): Promise<Product> => {
  const response = await fetch(`${apiUrl}/product`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  return response.json();
};

const updateProduct = async (product: Product): Promise<Product> => {
  const response = await fetch(`/product/${product.id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  return response.json();
};

// const fetchProducts = async (): Promise<Product[]> => {
//   const response = await fetch("/api/products", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
// }

export { newProduct, createProduct, updateProduct, apiUrl };
