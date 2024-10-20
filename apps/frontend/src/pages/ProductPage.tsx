import React, { useEffect, useState } from 'react';
import Header from "../components/shared/Header";
import ProductTable from "../components/product/ProductTable";
import ProductDialog from "../components/product/ProductDialog";
import Product from "../models/Product";
import { apiUrl } from "../services/productService";

const ProductPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (token) {
            fetch(`${apiUrl}/product`, {
                method: 'GET',
                headers: {
                  Authorization: `Bearer ${token}`,
                  'Content-Type': 'application/json',
                },
              })
                .then((response) => response.json())
                .then((data) => setProducts(data))
                .catch((error) => alert('Erro durante a busca de produtos: ' + error));
            } else {
              alert('Falha na autenticação do usuário');
            }
        }, [token]);

    return (
        <div className="bg-primary flex flex-col h-screen bg-primary">
            <Header />
            <br></br>
            <div className="h-32">
                <h1 className="ml-4 text-2xl text-secondary font-bold">Controle de Estoque</h1>    
                <ProductDialog p={null}/>   
            </div>
            <ProductTable products={products} />        
        </div>
    )
}
 export default ProductPage;