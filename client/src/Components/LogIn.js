import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { __values } from 'tslib';
import axios from 'axios';

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
      [password]: event.target.value,
      });
  }

  const logIn = event => {
    axios.post('/user/login', {
      username: values.name,
      password: values.password
    }).then(response => {
        console.log('login response: ')
        console.log(response)
        
    })
  }

  return(
  <>
    <Container maxWidth="sm">
    <Typography>Welcome To The Curse Of Brent</Typography>
      <Paper className={classes.panel}>
        <Box >
          <Typography variant="h6" component="h6">
            Log In Below
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
            onChange={changeHandler('password')}
            type="password"
            value={values.password}
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
        </Box>
      </Paper>
    </Container>
  </>
  )
}