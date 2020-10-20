import React, { Component, useState } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useHistory } from "react-router-dom";



import Coisinha from './Dashboard/ListItem';
import Chart from './Dashboard/Chart';
import Deposits from './Dashboard/Deposits';
import { makeStyles } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
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
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Navbar(props) {
  const classes = useStyles();

  const drawerWidth = 240;
  const [open, setOpen] = React.useState(false);



  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  // const open = Boolean(anchorEl);
  // const history = useHistory();

  // function handleClick(event) {
  //   setAnchorEl(event.currentTarget);
  // };

  // function handleClose() {
  //   setAnchorEl(null);
  // };

  // function handleProdcad() {
  //   const CadProducts = '/CadProducts';
  //   history.push(CadProducts);
  // }
  // function handleShelves() {
  //   const CadShelves = '/CadShelves';
  //   history.push(CadShelves);
  // }
  // function handleLogout() {
  //   const Logout = '/';
  //   history.push(Logout);
  // }


  // const drawerWidth = 240;





  return (

    // <div>
    <>
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            {props.title || "Dashboard"}
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <Coisinha /></List>
        {/* <Divider />
        <List>{secondaryListItems}</List> */}
      </Drawer>
      {/* // <Container {...props}> */}
      {/* //   <LeftIconButton> */}
      {/* //     <ButtonOverlay> */}
      {/* //       <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}> */}
      {/* //       <MaterialCommunityIconsIcon */}
      {/* //         name="menu"
      //         style={{ */}
      {/* //           backgroundColor: "transparent",
      //           color: "#FFFFFF",
      //           fontSize: 24
      //         }}

      //       ></MaterialCommunityIconsIcon>
      // </Button>

      //       <Menu
      //         id="fade-menu"
      //         anchorEl={anchorEl}
      //         keepMounted
      //         open={open}
      //         onClose={handleClose}
      //         TransitionComponent={Fade}
      //       >  <MenuItem onClick={handleProdcad}>Cadastrar Produtos</MenuItem>
      //         <MenuItem onClick={handleShelves}>Cadastrar Prateleiras</MenuItem>
      //         <MenuItem onClick={handleLogout}>Logout</MenuItem>
      //       </Menu>
           
      //     </ButtonOverlay>
      //   </LeftIconButton>
      //   <TextWrapper>
      //     <Title numberOfLines={1}>{props.title || "Title"}</Title>
      //   </TextWrapper>
      //   <RightIconButton>
      //     <ButtonOverlay>
      //       <MaterialCommunityIconsIcon
      //         name="dots-vertical"
      //         style={{
      //           backgroundColor: "transparent",
      //           color: "#FFFFFF",
      //           fontSize: 24
      //         }}
      //       ></MaterialCommunityIconsIcon>
      //     </ButtonOverlay>
      //   </RightIconButton>
      // </Container>
    // </div> */}
    </>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border: 1px;
 `;
const LeftIconButton = styled.div`
  padding: 0px;
  position: absolute;
  top: 6px;
  left: 0px;
  border: none;
`;

const TextWrapper = styled.div`
  position: absolute;
  left: 67px;
  bottom: 16px;
  display: flex;
`;

const Title = styled.span`
  font-family: Roboto;
  font-size: 18px;
  color: #FFFFFF;
  background-color: transparent;
  line-height: 18px;
  font-weight: 600;
`;

const RightIconButton = styled.div`
  padding: 11px;
  position: absolute;
  top: 0px;
  right: 0px;
  align-items: center;
  border: none;
`;

// export default Navbar;
