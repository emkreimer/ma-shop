import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';

import ProductDialog from './ProductDialog';
import ProductDeleteDialog from './ProductDeleteDialog';
import Product from '../../models/Product';

interface ProductTableProps {
  products: Product[]; 
}
const ProductTable: React.FC<ProductTableProps> = ({products}) => {
  const permissao = localStorage.getItem('permissao');
  const [page, setPage] = React.useState(0);
  const [productsPerPage, setProductsPerPage] = React.useState(5);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setProductsPerPage(parseInt(event.target.value, 5));
    setPage(0);
  };

  const formatDate = (date: string) => {
    if (date.charAt(4) === '-') {
      date = date.replace(/-/g, '/');
      return date.split('/').reverse().join('/');
    }
    return date;
   
  }
    return (
      <>
       <TablePagination
        sx={{backgroundColor: '#eaeaea'}}
          component="div"
          count={products.length}
          page={page}
          rowsPerPage={productsPerPage}
          rowsPerPageOptions={[]}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      <TableContainer component={Paper} sx={{backgroundColor: '#f7f7f7'}}>    
        <Table>      
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Data de cadastro</TableCell>
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>Nome</TableCell>
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>Valor unitário</TableCell>
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>Quantidade</TableCell>
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>Valor total</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {( productsPerPage > 0 ? products.slice(page * productsPerPage, page * productsPerPage + productsPerPage) : products).map((p) => ((
              <TableRow
                key={p.id}
              >
                <TableCell align="left">{p.dateCreated ? formatDate(p.dateCreated) : 'Nenhuma data'}</TableCell>
                <TableCell align="left">{p.name}</TableCell>
                <TableCell align="left">R$ {p.price}</TableCell>
                <TableCell align="left">{p.quantity ? p.quantity : 1}</TableCell>
                <TableCell align="left">R$ {p.quantity ? p.quantity * p.price : p.price}</TableCell>
                <TableCell align="left">
                    <div className='flex flex-row gap-x-3'>
                      <ProductDialog p={p} permissao={(p.isEditable || permissao === 'admin') ? true : false}/>
                      <ProductDeleteDialog p={p} permissao={(p.isEditable || permissao === 'admin') ? true : false}/>          
                    </div>
                </TableCell>

              </TableRow>
            )))}
          </TableBody>
        </Table>
      </TableContainer>
      </>
    )
}
export default ProductTable;