import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { __values } from 'tslib';

//Below are the classes I used in this form - you guys can adjust styling as necessary,
//I just went with the stock material-ui component styling
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  panel: {
    margin: theme.spacing(3),
    padding: theme.spacing(1),
  },
  container: {
    background: "#777"
  }
}));

export default function LoginPanel() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
    password: ''
  })

  const changeHandler = (name, password) => event => {
    setValues({...values, 
      [name]: event.target.value, 
      [password]: event.target.value });
  }

  return(
  <>
    <Container  maxWidth="sm">
    <h1 id = "welcometext">Welcome To The Curse of Brent</h1>
    <div className =  "login-box">
      <Paper className={classes.panel}>
        <Box >
          <Typography variant="h6" component="h6">
            Sign up or Log in
          </Typography>
          <TextField
            id="outlined-name"
            label="Name"
            className={classes.textField}
            value={values.name}
            onChange={changeHandler('name')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-email-input"
            label="E-mail"
            className={classes.textField}
            type="email"
            autoComplete="current-email"
            margin="normal"
            variant="outlined"
          />
        </Box>

        <Box component="span">
          <Button 
            variant="contained" 
            color = "primary"
            id = "loginButton"
            className={classes.button}>
            Login
          </Button>

          <Button 
            variant="contained" 
            color="secondary" 
            className={classes.button}>
            Sign-Up
          </Button>
        </Box>
      </Paper>
      </div>
    </Container>
  </>
  )
}