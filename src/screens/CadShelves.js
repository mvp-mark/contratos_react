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

export default function CadShelves() {
  const classes = useStyles();

  return (
    <>
      <Navbar title="Cadastrar Layout" />
      <Container component="main" maxWidth="xs" style={{ backgroundColor: "#FFF" }}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Cadastrar Layout
        </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Prateleira"
              name="prateleira"
              // autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="rua"
              label="Rua"
              // type="password"
              id="password"
              autoComplete="SKU"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="posicao"
              label="Posição"
              // type="password"
              id="password"
              autoComplete="SKU"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="andar"
              label="Andar"
              // type="password"
              id="email"
              autoComplete="location"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="setor"
              label="Setor"
              // type="password"
              id="password"
              autoComplete="SKU"
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