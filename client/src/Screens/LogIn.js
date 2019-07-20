import React from 'react';
import LoginPanel from '../Components/LoginPanel';
import ButtonAppBar from '../Components/AppBar';

class Login extends React.Component {
  render() {
    return(
      <>
      <ButtonAppBar />
        <LoginPanel />
      </>
    )
  }
}


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

