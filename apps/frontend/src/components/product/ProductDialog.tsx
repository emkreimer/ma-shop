import { useState, Fragment } from 'react';
import { DialogTitle, Dialog, Divider, DialogContent } from '@mui/material';
import ProductButton from './ProductButton';
import { newProduct } from '../../services/productService';
import Product from '../../models/Product';

interface ProductDialogProps {
    p: Product | null;
  }

const ProductDialog: React.FC<ProductDialogProps> = ({p}) => {
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

    return (
        <Fragment>
            <ProductButton edicao={!!p} onClick={handleClickOpen}/>
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
                            value={product.name}
                            onChange={handleProductChange}
                            className="border p-1 mr-14 rounded border-light-gray"
                        />
                        <input 
                            type="number"
                            value={product.quantity ? product.quantity : 1}
                            onChange={handleProductChange}
                            className="w-20 border p-1 rounded border-light-gray"
                        />
                    </div>
                    <div className='mt-5'>
                        <label className="block mb-2">Valor</label>
                        <input 
                            type="text" 
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
                            
                            className='ml-3 rounded p-2 bg-secondary opacity-90 hover:opacity-100 text-white'>
                            Cadastrar
                        </button>
                    </div>
                </DialogContent>
            </Dialog>
        </Fragment>
    );
};

export default ProductDialog;