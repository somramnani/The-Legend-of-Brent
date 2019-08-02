import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Typography, Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { __values } from "tslib";
import axios from "axios";
import {
  Redirect,
} from "react-router-dom";
import TitleBar from "./TitleBar";

class SignUp extends Component {
  state = {
    name: "",
    password: "",
    email: ""
  };

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value,
      [event.target.password]: event.target.value,
      [event.target.email]: event.target.value
    });
  };

  signUp = event => { // our signup method that uses axios to pass a username, password and e-mail to the db
    event.preventDefault();
    axios
      .post("/user/signup", {
        username: this.state.name,
        password: this.state.password,
        email: this.state.email
      })
      .then(res => {
        console.log(res);
        if (res.data) {
          alert(`Your account was created!`);
          console.log(res.data);
          return <Redirect to="/" />;
        } else {
          console.error("signup error");
        }
      })
      .catch(error => {
        console.log("sign up server error: ");
        console.error(error);
      });
  };

  render() {
    document.body.style.backgroundImage = "url(images/monster.jpg";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.height = "100%";
    return (
      <>
        <TitleBar />
        <Typography
            variant="h3"
            component="h3"
            align="left"
            style={{
              margin: 15,
              paddingBottom: "20px",
              fontFamily: "Merienda, cursive",
              color: 'maroon'
            }}
          >
            Sign Up To Play Now!
          </Typography>
        <Grid
          container
          direction="column"
          justify="space-evenly"
          alignItems="flex-start"
        >
          <Paper
            style={{
              padding: 20,
              backgroundColor: "whitesmoke",
              marginLeft: "4rem"
            }}
          >
            <Box>
              <Typography
                variant="h6"
                component="h6"
                style={{
                  fontFamily: "Merienda, cursive", color: "maroon"
                }}
              >
                Please Fill Out The Fields Below
              </Typography>
              <Grid item xs={10}>
                <TextField
                  id="outlined-name"
                  name="name"
                  label="Name"
                  onChange={this.changeHandler}
                  margin="normal"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  id="outlined-email-input"
                  label="E-mail"
                  name="email"
                  onChange={this.changeHandler}
                  type="email"
                  margin="normal"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  name="password"
                  onChange={this.changeHandler}
                  type="password"
                  margin="normal"
                  variant="outlined"
                />
              </Grid>
            </Box>
            <Box>
              <Button
                variant="contained"
                style={{ backgroundColor: 'maroon', color: 'white' }}
                onClick={this.signUp}
              >
                Sign-Up
              </Button>
            </Box>
          </Paper>
        </Grid>
      </>
    );
  }
}
export default SignUp;
