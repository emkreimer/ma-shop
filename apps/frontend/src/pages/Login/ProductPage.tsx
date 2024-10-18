import Header from "../../components/shared/Header";
import ProductTable from "../../components/product/ProductTable";
import NewProductDialog from "../../components/product/NewProductDialog";
import { mockProducts } from "../../services/productService";

const ProductPage: React.FC = () => {
    return (
        <div className="bg-primary flex flex-col h-screen bg-primary">
            <Header />
            <br></br>
            <div className="h-48">
                <h1 className="ml-4 text-2xl text-secondary font-bold">Controle de Estoque </h1>    
                <NewProductDialog />   
                {/* <button className="ml-4 my-10 rounded p-3 bg-secondary text-white">+ Cadastrar novo produto</button> */}
            </div>
            <ProductTable products={mockProducts} />        
        </div>
            
        
        
    )
}
 export default ProductPage;