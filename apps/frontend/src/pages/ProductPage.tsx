import React, { useEffect, useState } from 'react';
import Header from "../components/shared/Header";
import ProductTable from "../components/product/ProductTable";
import ProductDialog from "../components/product/ProductDialog";
import Product from "../models/Product";

const ProductPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        fetch('/api/product')
          .then((response) => response.json())
          .then((data) => setProducts(data))
          .catch(() => alert('Vixe! Deu erro!'));
      }, []);

    return (
        <div className="bg-primary flex flex-col h-screen bg-primary">
            <Header />
            <br></br>
            <div className="h-48">
                <h1 className="ml-4 text-2xl text-secondary font-bold">Controle de Estoque</h1>    
                <ProductDialog p={null}/>   
            </div>
            <ProductTable products={products} />        
        </div>
    )
}
 export default ProductPage;