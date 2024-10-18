import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Product from '../../models/Product';

const ProductTable = (products: Product[]) => {
    return (
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Data de cadastro</TableCell>
            <TableCell align="right">Nome</TableCell>
            <TableCell align="right">Valor unitário</TableCell>
            <TableCell align="right">Quantidade</TableCell>
            <TableCell align="right">Valor total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((p) => (
            <TableRow
              key={p.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {p.name}
              </TableCell>
              <TableCell align="right">{p.dateCreated.toLocaleDateString()}</TableCell>
              <TableCell align="right">{p.name}</TableCell>
              <TableCell align="right">{p.price}</TableCell>
              <TableCell align="right">{p.quantity ? p.quantity : 0}</TableCell>
              <TableCell align="right">{p.quantity ? p.quantity * p.price : p.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default ProductTable;