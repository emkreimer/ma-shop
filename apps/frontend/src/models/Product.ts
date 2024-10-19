interface Product {
  id: number | null;
  dateCreated: string;
  name: string;
  price: number;
  quantity?: number;
}

export default Product;
