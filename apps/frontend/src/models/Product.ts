interface Product {
  id: number | null;
  dateCreated: string;
  name: string;
  price: number;
  quantity?: number;
  isEditable: boolean;
}

export default Product;
