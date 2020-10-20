import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import Login from "./screens/Login";
import Produtos from "./screens/Produtos";
import CadProducts from "./screens/CadProducts";
import CadShelves from "./screens/CadShelves";
import Dashboard from "./screens/Dashboard";
import Search from "./screens/Search";
import Admin from "./screens/Admin";
import "./style.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/Login/" exact component={Login} />
      <Route path="/Produtos/" exact component={Dashboard} />
      <Route path="/Search/" exact component={Search} />
      <Route path="/Admin/" exact component={Admin} />
      <Route path="/CadProducts/" exact component={CadProducts} />
      <Route path="/CadShelves/" exact component={CadShelves} />
      {/* <Route path="/Dashboard/" exact component={Dashboard} /> */}
    </Router>
  );
}

export default App;
