import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AuthHelperMethods from "./_AuthHelper";
import { BrowserRouter as Router, Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  appbar: {
    backgroundColor: "black"
  }
}));

export default function TitleBar(props) {
  const classes = useStyles();

  const handleLogout = () => {
    if (!Auth.loggedIn()) {
      alert("You are not currently logged in.");
    } else {
      Auth.logout();
    }
  };

  const Auth = new AuthHelperMethods();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
          </IconButton> */}

          <Typography
            variant="h6"
            className={classes.title}
            style={{
              fontFamily: "Merienda, cursive"
            }}
          >
            THE LEGEND OF BRENT
          </Typography>
          <Button
            color="inherit"
            styles={{
              fontFamily: "Merienda, cursive"
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
