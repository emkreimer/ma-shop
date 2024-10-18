import Product from "../models/Product";

interface ProductTableProps {
  products: Product[];
}

const mockProducts: Product[] = [
  {
    id: 1,
    dateCreated: new Date(),
    name: "test",
    price: 10.0,
  },
  {
    id: 2,
    dateCreated: new Date(),
    name: "test",
    price: 10.0,
  },
  {
    id: 3,
    dateCreated: new Date(),
    name: "test",
    price: 10.0,
  },
];

export { mockProducts, type ProductTableProps };
