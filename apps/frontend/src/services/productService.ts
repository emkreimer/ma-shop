import Product from "../models/Product";

const newProduct: Product = {
  id: null,
  dateCreated: new Date().toLocaleDateString(),
  name: "",
  price: 0.0,
};

const createProduct = async (product: Product): Promise<Product> => {
  const response = await fetch("/api/product", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  return response.json();
};

const updateProduct = async (product: Product): Promise<Product> => {
  const response = await fetch(`/api/product/${product.id}`, {
    method: "PUT",
    headers: {
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

export { newProduct, createProduct, updateProduct };
