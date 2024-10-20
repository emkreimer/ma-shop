import { useState, Fragment } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { DialogTitle, Dialog, DialogContent, Tooltip } from '@mui/material';
import Product from '../../models/Product';
import { deleteProduct } from '../../services/productService';

interface ProductDialogProps {
    p: Product;
    permissao: boolean;
  }

const ProductDeleteDialog: React.FC<ProductDialogProps> = ({p, permissao}) => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete =  async () => {
        permissao ? deleteProduct(p.id) : alert('Você não tem permissão!');
        handleClose();
        window.location.reload();
    }

    return (
        <Fragment>
            <Tooltip title={permissao ? 'Deletar' : 'Sem permissão'}>
                <button onClick={handleClickOpen} disabled={!permissao}>
                    <DeleteOutlineIcon color='error' />
                </button>
            </Tooltip>
           
            <Dialog 
                open={open}
                onClose={handleClose}
                >
                <DialogTitle sx={{backgroundColor: '#f7f7f7'}}>
                    Tem certeza de que deseja excluir o produto {p.name}?
                </DialogTitle>
                
                <DialogContent sx={{backgroundColor: '#f7f7f7'}}>         
                    <div className='flex flex-row justify-end mt-10'>
                        <button 
                            onClick={handleClose}
                            className='ml-3 rounded p-2 bg-primary hover:bg-light-gray'>
                                Cancelar
                        </button>
                        <button 
                            onClick={handleDelete}
                            className='ml-3 rounded p-2 bg-error opacity-90 hover:opacity-100 text-white'>
                            Excluir
                        </button>
                    </div>
                </DialogContent>
            </Dialog>
        </Fragment>
    );
};

export default ProductDeleteDialog;