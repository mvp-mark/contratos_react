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
  const [contracts, setcontracts] = useState([]);
  const [test, setTest] = useState([]);

  useEffect(() => {
    async function loadItems() {
      const response = await api.get("/table");
      
      setcontracts(response.data.contracts);
      setTest(response.data.days);
      
    }
    loadItems();
  }, []);
  // const rows = contracts.map((contract) =>
  //   [
    //     createData(
      //       contract.name, contract.sku, contract.endereco, contract.quantity
      //     )
      //   ]);
      
      // moment.locale('pt-br')
      console.log('OPA',contracts);
      console.log('OPA2',test);
      // console.log(new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRA' }).format(contracts.value_global));
      
      // const array3= [...contracts,...test];
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
          {contracts.map((contract) => (
            
            <TableRow key={contract.id}>
              <TableCell component="th" scope="row">{contract.hired.name}<p>
                {contract.contract}
                </p>
                </TableCell>
              <TableCell align="justify">{contract.object}</TableCell>
              <TableCell align="right">{contract.finish_date}</TableCell>

                <TableCell align="right">

                  { /* {moment(contract.finish_date,"DD/MM/YYYY").locale('pt-br').fromNow(false)} */ }
                  {moment(contract.finish_date,"DD/MM/YYYY").locale('pt-br').fromNow()}
                  
                  {/* // .fromNow(false) */}
                  
                  </TableCell>


              <TableCell align="right">{
                // contract.value_global
                new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(contract.value_global).trim()
              }</TableCell>
              <TableCell align="right">
          {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'  }).format(contract.value_monthly).trim()}
                </TableCell>
              <TableCell align="right">{contract.supervisor}</TableCell>
              <TableCell align="right">{contract.status}</TableCell>
              <TableCell align="right">{contract.modality}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

}