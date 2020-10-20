import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import api from "../../services/api";
import moment from 'moment';
import 'moment/min/locales';
// import 'moment/src/locale/pt-br';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});




export default function SimpleTable() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [test, setTest] = useState([]);

  useEffect(() => {
    async function loadItems() {
      const response = await api.get("/table");
      
      setProducts(response.data.contracts);
      setTest(response.data.days);
      
    }
    loadItems();
  }, []);
  // const rows = products.map((product) =>
  //   [
    //     createData(
      //       product.name, product.sku, product.endereco, product.quantity
      //     )
      //   ]);
      
      // moment.locale('pt-br')
      console.log('OPA',products);
      console.log('OPA2',test);
      // console.log(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRA' }).format(products.value_global));
      
      // const array3= [...products,...test];
      // const today = moment();
      // console.log(array3);
      return (
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Contrato</TableCell>
            <TableCell align="center">Objeto</TableCell>
            <TableCell align="right">Data de Termino</TableCell>
            <TableCell align="right">Dias para o termino</TableCell>
            <TableCell align="right">Posição</TableCell>
            <TableCell align="right">Quantidade</TableCell>
            <TableCell align="right">Fiscal</TableCell>
            <TableCell align="right">status</TableCell>
            <TableCell align="right">Modalidade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            
            <TableRow key={product.id}>
              <TableCell component="th" scope="row">{product.hired.name}<p>
                {product.contract}
                </p>
                </TableCell>
              <TableCell align="justify">{product.object}</TableCell>
              <TableCell align="right">{product.finish_date}</TableCell>

                <TableCell align="right">

                  {moment(product.finish_date,"DD/MM/YYYY").locale('pt-br').fromNow()}</TableCell>


              <TableCell align="right">{
                // product.value_global
                new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.value_global).trim()
              }</TableCell>
              <TableCell align="right">
          {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'  }).format(product.value_monthly).trim()}
                </TableCell>
              <TableCell align="right">{product.supervisor}</TableCell>
              <TableCell align="right">{product.status}</TableCell>
              <TableCell align="right">{product.modality}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

}