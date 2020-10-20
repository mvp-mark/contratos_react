// import React, { Component, useState, useEffect } from "react";
// import styled, { css } from "styled-components";
// import Navbar from "../components/Navbar";
// import MaterialStackedLabelTextbox from "../components/MaterialStackedLabelTextbox";
// import MaterialButtonPrimary from "../components/MaterialButtonPrimary";
// import MaterialButtonViolet1 from "../components/MaterialButtonViolet1";

// function CadProducts(props) {
// //   const [ location, setLocation] = useState([]);

// //   useEffectt(() => {
// //     axios.get('https://projeto--integrado.herokuapp.com/shelves').then(response => {
// //         const idLocations = response.data.map(shelve => shelve.id);

// //         setLocation(location);
// //     });
// // }, []);

//   return (
//     <Container>
//       <Navbar
//         // title={"undefined"}
//         style={{
//           height: 48,
//           backgroundColor: "rgba(63,81,181,1)",
//           flex: 1,
//           alignSelf: "stretch"
//         }}
//         title="Cadastro de Produtos"
//       ></Navbar>
//       <Group4>
//         <MaterialStackedLabelTextbox
//           label={"undefined"}
//           inputStyle="Input"
//           style={{
//             height: 60,
//             width: 375,
//             position: "absolute",
//             top: 0,
//             left: 0
//           }}
//           label="Nome do Produto"
//           inputStyle="Ex: Camisa X"
//         ></MaterialStackedLabelTextbox>
//         <MaterialStackedLabelTextbox
//           label={"undefined"}
//           inputStyle="Input"
//           style={{
//             height: 60,
//             width: 375,
//             position: "absolute",
//             top: 60,
//             left: 0
//           }}
//           label="SKU do Produto"
//           inputStyle="Ex: FLA-50-A"
//         ></MaterialStackedLabelTextbox>
//         <MaterialStackedLabelTextbox
//           label={"undefined"}
//           inputStyle="Input"
//           style={{
//             height: 60,
//             width: 375,
//             position: "absolute",
//             top: 120,
//             left: 0
//           }}
//           label="Prateleira"
//           inputStyle="Localização"
//         ></MaterialStackedLabelTextbox>
//         <MaterialStackedLabelTextbox
//           label={"undefined"}
//           inputStyle="Input"
//           style={{
//             height: 60,
//             width: 375,
//             position: "absolute",
//             top: 180,
//             left: 0
//           }}
//           label="Quantidade"
//           inputStyle="50"
//         ></MaterialStackedLabelTextbox>
//         <Rect></Rect>
//       </Group4>
//       <Group3>
//         <MaterialButtonPrimary
//           caption={"undefined"}
//           style={{
//             height: 36,
//             width: 100
//           }}
//           caption="Voltar"
//         ></MaterialButtonPrimary>
//         <MaterialButtonViolet1
//           caption={"undefined"}
//           style={{
//             height: 36,
//             width: 100
//           }}
//           caption="Cadastrar"
//         ></MaterialButtonViolet1>
//       </Group3>
//     </Container>
//   );
// }

// const Container = styled.div`
//   display: flex;
//   flex-direction: row;
//   position: relative;
//   height: 100vh;
//   width: 100vw;
// `;

// const Group4 = styled.div`
//   top: 208px;
//   left: 489px;
//   width: 388px;
//   height: 336px;
//   position: absolute;
//   display: flex;
// `;

// const Rect = styled.div`
//   display: flex;
//   flex: 1 1 0%;
//   background-color: rgba(241, 241, 241,1);
//   position: absolute;
//   top: 336px;
//   left: 188px;
//   height: 0px;
//   width: 0px;
//   flex-direction: column;
// `;

// const Group3 = styled.div`
//   flex-direction: row;
//   width: 375px;
//   height: 96px;
//   justify-content: space-between;
//   position: absolute;
//   top: 464px;
//   left: 495px;
//   align-items: center;
//   display: flex;
// `;

// export default CadProducts;
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Navbar from '../components/Navbar';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({

  //   root: {
  //     display: 'flex',
  // },
  // toolbar: {
  //     paddingRight: 24, // keep right padding when drawer closed
  // },
  // toolbarIcon: {
  //     display: 'flex',
  //     alignItems: 'center',
  //     justifyContent: 'flex-end',
  //     padding: '0 8px',
  //     ...theme.mixins.toolbar,
  // },
  // appBar: {
  //     zIndex: theme.zIndex.drawer + 1,
  //     transition: theme.transitions.create(['width', 'margin'], {
  //         easing: theme.transitions.easing.sharp,
  //         duration: theme.transitions.duration.leavingScreen,
  //     }),
  // },
  appBarShift: {
    marginLeft: "240px",
    width: `calc(100% - 240px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: "240px",
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  // paper: {
  //     padding: theme.spacing(2),
  //     display: 'flex',
  //     flexDirection: 'column',
  // },
  fixedHeight: {
      height: 240,
  },
  paper: {
    marginTop: theme.spacing(-18),
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function CadProducts() {
  const classes = useStyles();

  return (
    <>
      <Navbar title="Cadastrar Produtos" />
      <Container component="main" maxWidth="xs" style={{ backgroundColor: "#FFF" }}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Cadastrar Produto
        </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Nome do Produto"
              name="name"
              // autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="SKU"
              label="SKU do Produto"
              // type="password"
              id="password"
              autoComplete="SKU"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="layout"
              label="Layout"
              // type="password"
              id="email"
              autoComplete="location"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="quantity"
              label="Quantidade"
              // type="password"
              id="password"
              autoComplete="quantity"
            />
            {/* <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="SKU"
            label="SKU do Produto"
            // type="password"
            id="password"
            autoComplete="SKU"
          /> */}
            {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Cadastrar
          </Button>
            {/* <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid> */}
          </form>
        </div>
        <Box mt={8}>
          {/* <Copyright /> */}
        </Box>
      </Container>
    </>
  );
}