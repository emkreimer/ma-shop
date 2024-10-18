import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import type { ProductTableProps } from '../../services/productService';

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
                <TableCell align="left">{p.dateCreated.toLocaleDateString()}</TableCell>
                <TableCell align="left">{p.name}</TableCell>
                <TableCell align="left">{p.price}</TableCell>
                <TableCell align="left">{p.quantity ? p.quantity : 0}</TableCell>
                <TableCell align="left">R$ {p.quantity ? p.quantity * p.price : p.price}</TableCell>
                <TableCell align="left">
                    <div className='flex flex-row gap-x-3'>
                      <button><DeleteOutlineOutlinedIcon color='error'/></button>
                      <button><SettingsOutlinedIcon /></button>            
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