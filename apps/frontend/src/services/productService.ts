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
  if (validateProduct(product)) {
    const response = await fetch(`${apiUrl}/product`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    return response.json();
  } else {
    alert("Preencha todos os campos");
  }
};

const updateProduct = async (product: Product): Promise<Product> => {
  const response = await fetch(`${apiUrl}/product/${product.id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  return response.json();
};

const deleteProduct = async (id: number): Promise<void> => {
  await fetch(`${apiUrl}/product/delete/${id}`, {
    // o método de deletar na verdade só muda o status do produto para deletado
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const validateProduct = (p: Product) => {
  if (!p.name || !p.price) {
    return false;
  }
  return true;
};

export { newProduct, createProduct, updateProduct, deleteProduct, apiUrl };
