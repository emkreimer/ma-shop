interface Product {
    id: number;
    dateCreated: Date,
    name: string;
    price: number
    quantity?: number;
}

export default Product;