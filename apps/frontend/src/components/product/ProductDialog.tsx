import { useState, Fragment } from 'react';
import { DialogTitle, Dialog, Divider, DialogContent } from '@mui/material';
import ProductButton from './ProductButton';
import { newProduct, updateProduct, createProduct } from '../../services/productService';
import Product from '../../models/Product';

interface ProductDialogProps {
    p: Product | null;
    permissao: boolean;
  }

const ProductDialog: React.FC<ProductDialogProps> = ({p, permissao}) => {
    const [product, setProduct] = useState<Product>(p ? p : newProduct)
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


const handleProductChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((b4Product) => ({
        ...b4Product,
        [name]: name === 'price' ? Number(value) : value,
    }))  
  };

const handleSubmit = async () => {
    p ? await updateProduct(product) : await createProduct(product);
    setOpen(false);
};

    return (
        <Fragment>
            <ProductButton permissao={permissao} edicao={!!p} onClick={handleClickOpen}/>
            <Dialog 
                open={open}
                onClose={handleClose}
                >
                <DialogTitle sx={{backgroundColor: '#f7f7f7'}}>
                    <div className='mx-1 my-3'>
                        {p ? 'Gerenciar produto' : 'Cadastrar novo produto'}
                        <Divider/>
                    </div>
                </DialogTitle>
                
                <DialogContent sx={{backgroundColor: '#f7f7f7'}}>
                    <div className='mb-5'>
                        <label className='block mb-2'>Data de cadastro</label>
                        <input
                            type="date"
                            name="dateCreated"
                            value={product.dateCreated}
                            onChange={handleProductChange}
                            className="border px-3 py-1 rounded border-light-gray"
                        />
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex flex-row justify-between'>
                            <label className="block mb-2">Nome do produto</label>
                            <label className="block mb-2">Quantidade</label>
                        </div>
                    </div>            
                    <div className='flex flex-row'>
                        <input 
                            type="text" 
                            name="name"
                            value={product.name}
                            onChange={handleProductChange}
                            className="border p-1 mr-14 rounded border-light-gray"
                        />
                        <input 
                            type="number"
                            name="quantity"
                            value={product.quantity ? product.quantity : 1}
                            onChange={handleProductChange}
                            className="w-20 border p-1 rounded border-light-gray"
                        />
                    </div>
                    <div className='mt-5'>
                        <label className="block mb-2">Valor</label>
                        <input 
                            type="number" 
                            name='price'
                            value={product.price}
                            onChange={handleProductChange}
                            className="border p-1 mr-14 rounded border-light-gray"
                        />
                    </div>
                    <div className='flex flex-row justify-end mt-10'>
                        <button
                            onClick={handleClose} 
                            className='ml-3 rounded p-2 bg-primary hover:bg-light-gray'>    
                            Cancelar
                        </button>
                        <button 
                            onClick={handleSubmit}                          
                            className='ml-3 rounded p-2 bg-secondary opacity-90 hover:opacity-100 text-white'>
                            {p ? 'Salvar' : 'Cadastrar'}
                        </button>
                    </div>
                </DialogContent>
            </Dialog>
        </Fragment>
    );
};

export default ProductDialog;