import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import AuthHelperMethods from "../Components/_AuthHelper";

class LogIn extends Component {
  Auth = new AuthHelperMethods();

  state = {
    username: "",
    password: ""
  };

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value,
      [event.target.password]: event.target.value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.Auth.login(this.state.username, this.state.password)
      .then(response => {
        if (response === false) {
          return alert("Sorry those credentials don't exist!");
        }
        alert("log in worked");
      })
      .catch(err => {
        alert(err);
      });
  };

  render() {
    return (
      <>
        <Container maxWidth="sm">
          <Typography>Welcome To The Curse Of Brent</Typography>
          <Paper>
            <Box>
              <Typography variant="h6" component="h6">
                Log In Below
              </Typography>
              <TextField
                id="outlined-name"
                label="Name"
                name="username"
                onChange={this.changeHandler}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-password-input"
                name="password"
                label="Password"
                onChange={this.changeHandler}
                type="password"
                margin="normal"
                variant="outlined"
              />
            </Box>
            <Box component="span">
              <Button
                variant="contained"
                color="primary"
                id="loginButton"
                onClick={this.handleFormSubmit}
              >
                Login
              </Button>
            </Box>
          </Paper>
        </Container>
      </>
    );
  }
}

export default LogIn;
