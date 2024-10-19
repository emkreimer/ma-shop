import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ProductDialog from './ProductDialog';
import ProductDeleteDialog from './ProductDeleteDialog';
import Product from '../../models/Product';

interface ProductTableProps {
  products: Product[]; 
}
const ProductTable: React.FC<ProductTableProps> = ({products}) => {
    return (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Data de cadastro</TableCell>
              <TableCell align="left">Nome</TableCell>
              <TableCell align="left">Valor unitário</TableCell>
              <TableCell align="left">Quantidade</TableCell>
              <TableCell align="left">Valor total</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((p) => (
              <TableRow
                key={p.id}
                // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">{p.dateCreated ? p.dateCreated : 'Nenhuma data'}</TableCell>
                <TableCell align="left">{p.name}</TableCell>
                <TableCell align="left">{p.price}</TableCell>
                <TableCell align="left">{p.quantity ? p.quantity : 1}</TableCell>
                <TableCell align="left">R$ {p.quantity ? p.quantity * p.price : p.price}</TableCell>
                <TableCell align="left">
                    <div className='flex flex-row gap-x-3'>
                      <ProductDialog p={p}/>
                      <ProductDeleteDialog p={p}/>          
                    </div>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}

export default ProductTable;