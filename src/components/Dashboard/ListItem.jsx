import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { useHistory } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';



export default function Coisinha(){
  const history = useHistory();

  
  function handleDashboard() {
    const Dash = '/Produtos';
    history.push(Dash);
  }
  function handleProdcad() {
    const CadProducts = '/CadProducts';
    history.push(CadProducts);
  }
  function handleShelves() {
    const CadShelves = '/CadShelves';
    history.push(CadShelves);
  }
  function handleSearch() {
    const Search = '/Search';
    history.push(Search);
  }
  function handleAdmin() {
    const Admin = '/Admin';
    history.push(Admin);
  }
  function handleLogout() {
    const Logout = '/';
    history.push(Logout);
  }
  // export const mainListItems = (
    
  return (
    
    <div>
    <ListItem button onClick={handleDashboard}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard"  />
    </ListItem>
    <ListItem button onClick={handleProdcad}>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Cadastrar Produtos"/>
    </ListItem>
    <ListItem button onClick={handleShelves}>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Cadastrar Localidade"  />
    </ListItem>
    <ListItem button onClick={handleSearch}>
      <ListItemIcon>
        <SearchIcon />
      </ListItemIcon>
      <ListItemText primary="Busca"  />
    </ListItem>
    <Divider />
    <ListItem button onClick={handleAdmin}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Editar o Perfil"  />
    </ListItem>
<ListSubheader inset onClick={handleLogout}>Deslogar</ListSubheader>
  </div>
);

// export const secondaryListItems = (
//   <div>
//     <ListSubheader inset onClick={handleLogout}>Deslogar</ListSubheader>
//     {/* <ListItem button>
//       <ListItemIcon>
//       <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//       </ListItem>
//       <ListItem button>
//       <ListItemIcon>
//       <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//       </ListItem>
//       <ListItem button>
//       <ListItemIcon>
//       <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItem> */}
//   </div>
// );
}