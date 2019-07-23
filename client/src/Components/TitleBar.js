import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

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
// I left out the navigation features below, but they're easy enough to pop in when we have a site..
// ...structure laid out.
export default function TitleBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton> */}

          <Typography
            variant="h6"
            className={classes.title}
            style={{
              fontFamily: "Merienda, cursive"
            }}
          >
            THE CURSE OF BRENT
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
