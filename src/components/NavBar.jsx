import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  List,
  ListItem,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import { BiNews } from "react-icons/bi";

const useStyles = makeStyles({
  root: {
    background: "#5e6061",
    "& .MuiIconButton-label": {
      color: "#fff",
    },
    "& .MuiSvgIcon-root": {
      fontSize: "2rem",
    },
  },
  menuButton: {
    marginLeft: "2rem",
  },
  drawer: {
    "& .MuiDrawer-paper": {
      width: "10%",
      background: "#5e6061",
      marginTop: "64px",
      paddingLeft:'1rem'
    },
    "& .MuiButton-root": {
      color: "#fff",
    },
    "& .MuiBackdrop-root": {
      marginTop: "64px",
    },
    
  },
  btn: {
    alignItems: "unset",
  },
});

const NavBar = () => {
  const classes = useStyles();
  const [opens, setOpens] = useState(false);
  const navigation = useNavigate();

  return (
    <>
      <Drawer
        open={opens}
        onClick={() => setOpens(false)}
        className={classes.drawer}
      >
        <List>
          <ListItem>
            <Button
              size="large"
              startIcon={<HomeIcon />}
              className={classes.btn}
              onClick={() => navigation("/home")}
            >
              Home
            </Button>
          </ListItem>
          <ListItem>
            <Button
              className={classes.btn}
              size="large"
              startIcon={<BiNews />}
              onClick={() => navigation("/news")}
            >
              News
            </Button>
          </ListItem>
        </List>
      </Drawer>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            onClick={() => setOpens(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
