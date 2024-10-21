import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Paper, TablePagination, 
  TableSortLabel } from '@mui/material';

import ProductDialog from './ProductDialog';
import ProductDeleteDialog from './ProductDeleteDialog';
import Product from '../../models/Product';

interface ProductTableProps {
  products: Product[]; 
}

type Order = 'asc' | 'desc';

const ProductTable: React.FC<ProductTableProps> = ({products}) => {
  const permissao = localStorage.getItem('permissao');

  const [page, setPage] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(5);
  const [orderBy, setOrderBy] = useState<'name' | 'dateCreated'>('name');
  const [order, setOrder] = useState<Order>('asc'); 

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

  const handleRequestSort = (property: 'name' | 'dateCreated') => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (orderBy === 'name') {
      return order === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else {
      const dateA = new Date(a.dateCreated).getTime();
      const dateB = new Date(b.dateCreated).getTime();
      return order === 'asc' ? dateA - dateB : dateB - dateA;
    }
  });

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
              <TableCell sx={{ fontWeight: 'bold' }}>
              <TableSortLabel
                  active={orderBy === 'dateCreated'}
                  direction={orderBy === 'dateCreated' ? order : 'asc'}
                  onClick={() => handleRequestSort('dateCreated')}
                >
                  Data de cadastro
                </TableSortLabel>
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>
                <TableSortLabel
                  active={orderBy === 'name'}
                  direction={orderBy === 'name' ? order : 'asc'}
                  onClick={() => handleRequestSort('name')}
                >
                  Nome
                </TableSortLabel>
              </TableCell>
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>Valor unitário</TableCell>
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>Quantidade</TableCell>
              <TableCell align="left" sx={{ fontWeight: 'bold' }}>Valor total</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {( productsPerPage > 0 ? sortedProducts.slice(page * productsPerPage, page * productsPerPage + productsPerPage) : sortedProducts).map((p) => ((
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