import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useAuth0 } from '../react-auth0-wrapper'

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
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
      <Toolbar>
        <Typography
          variant="h6"
          className={classes.title}
          style={{
            fontFamily: "Merienda, cursive"
          }} >
        <Link
          to="/"
          color="inherit"
          style={{
            textDecoration: "none",
            color: "white",
            paddingLeft: "20px"
          }} >
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
          }} >
            CHARACTER SELECTION
        </Link>
        {!isAuthenticated && (
        <Button
          onClick={() =>
            loginWithRedirect({})
          }>
          Log in
        </Button>
        )}
        {isAuthenticated && <Button onClick={() => logout()}>Log out</Button>}
      </Toolbar>
      </AppBar>
    </div>
  );
}
