import { useState, Fragment } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { DialogTitle, Dialog, DialogContent } from '@mui/material';
import Product from '../../models/Product';

interface ProductDialogProps {
    p: Product;
  }

const ProductDeleteDialog: React.FC<ProductDialogProps> = ({p}) => {
    const [product, setProduct] = useState<Product>(p)
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Fragment>
            <button onClick={handleClickOpen}>
                <DeleteOutlineIcon color='error' />
            </button>
            <Dialog 
                open={open}
                onClose={handleClose}
                >
                <DialogTitle sx={{backgroundColor: '#f7f7f7'}}>
                    <div className='rounded-full bg-white items-center p-3' >
                        <DeleteOutlineIcon sx={{fontSize: 34}} color='error'/>
                    </div>
                </DialogTitle>
                
                <DialogContent sx={{backgroundColor: '#f7f7f7'}}>         
                    <div className='flex flex-row justify-center mt-10'>
                        <button className='ml-3 rounded p-2 bg-primary hover:bg-light-gray'>Cancelar</button>
                        <button 
                            onClick={handleClose}
                            className='ml-3 rounded p-2 bg-secondary opacity-90 hover:opacity-100 text-white'>
                            Cadastrar
                        </button>
                    </div>
                </DialogContent>
            </Dialog>
        </Fragment>
    );
};

export default ProductDeleteDialog;