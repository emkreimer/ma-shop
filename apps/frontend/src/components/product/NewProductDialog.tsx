import { useState, Fragment } from 'react';
import { DialogTitle, Dialog, Divider, DialogContent } from '@mui/material';



const NewProductDialog = () => {
     
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Fragment>
            <button 
                className="ml-4 my-10 rounded p-3 bg-secondary opacity-90 hover:opacity-100 text-white" 
                onClick={handleClickOpen}>+ Cadastrar novo produto
            </button>
            <Dialog 
                open={open}
                onClose={handleClose}
                sx={{color: '#f7f7f7'}}>
                <DialogTitle>Cadastrar novo produto</DialogTitle>
                <Divider className='my-3'/>
                <DialogContent>
                    {/* <label className="block mb-2">Data de cadastro</label>
                    <DatePicker /> */}
                    <div className='flex flex-col'>
                        <div className='flex flex-row justify-between'>
                            <label className="block mb-2">Nome do produto</label>
                            <label className="block mb-2">Quantidade</label>
                        </div>
                    </div>            
                    <div className='flex flex-row'>
                        <input 
                            type="text" 
                            className="border p-1 mr-14 rounded border-light-gray"
                        />
                        <input 
                            type="number"
                            className="w-20 border p-1 rounded border-light-gray"
                        />
                    </div>
                    <div className='mt-5'>
                        <label className="block mb-2">Valor</label>
                        <input 
                            type="text" 
                            className="border p-1 mr-14 rounded border-light-gray"
                        />
                    </div>
                    <div className='flex flex-row justify-end mt-10'>
                        <button className='ml-3 rounded p-2 bg-white hover:bg-light-gray'>Cancelar</button>
                        <button className='ml-3 rounded p-2 bg-secondary opacity-90 hover:opacity-100 text-white'>Cadastrar</button>
                    </div>
                </DialogContent>
            </Dialog>
        </Fragment>
    );
};

export default NewProductDialog;