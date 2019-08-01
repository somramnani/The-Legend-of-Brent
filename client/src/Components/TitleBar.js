import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AuthHelperMethods from "./_AuthHelper";
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";

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

export default function TitleBar() {
  const classes = useStyles();

  const handleLogout = () => {
    if (!Auth.loggedIn()) {
      alert("You are not currently logged in.");
    } else {
      Auth.logout();
      return <Redirect to="/" />;
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
            <Link
              to="/"
              color="inherit"
              style={{
                textDecoration: "none",
                color: "white",
                paddingLeft: "20px"
              }}
            >
              THE LEGEND OF BRENT
            </Link>
          </Typography>
          <Link
            to="/CharSelect"
            color="inherit"
            style={{
              fontFamily: "Merienda, cursive",
              textDecoration: "none",
              color: "white"
            }}
            onClick={() => {
              // this.props.deleteCharacter();
            }}
          >
            CHARACTER SELECTION
          </Link>
          <Link
            to="/"
            color="inherit"
            style={{
              fontFamily: "Merienda, cursive",
              textDecoration: "none",
              color: "white",
              paddingLeft: "20px"
            }}
            onClick={() => {
              handleLogout();
            }}
          >
            LOGOUT
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
