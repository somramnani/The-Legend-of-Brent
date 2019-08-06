import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Typography, Grid, Container, Icon } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { __values } from "tslib";
import axios from "axios";
<<<<<<< HEAD
import { Redirect } from "react-router-dom";
=======
import {
  Redirect,
} from "react-router-dom";
>>>>>>> c861155a6a48fd4adc72aa28a996a4405cb412d8
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

<<<<<<< HEAD
  signUp = event => {
=======
  signUp = event => { // our signup method that uses axios to pass a username, password and e-mail to the db
>>>>>>> c861155a6a48fd4adc72aa28a996a4405cb412d8
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
<<<<<<< HEAD
          alert(`Your account was successfully created!`);
=======
          alert(`Your account was created!`);
>>>>>>> c861155a6a48fd4adc72aa28a996a4405cb412d8
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
<<<<<<< HEAD
        <Grid
          container
          direction="column"
          justify="space-evenly"
          alignItems="center" >
        <Grid item>
          <Typography
            variant="h3"
            component="h3"
            style={{
              margin: 15,
              paddingBottom: "50px",
              fontFamily: "Merienda, cursive"
            }} >
            Sign Up To Play Now!
          </Typography>
=======
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
>>>>>>> c861155a6a48fd4adc72aa28a996a4405cb412d8
        </Grid>
        <Container maxWidth='xs'>
        <Grid direction="row">
        <Paper square="true" elevation="20"
          style={{
            padding: 30,
            backgroundColor: "#f5f5f5"
          }} >
        <Grid container 
          alignContent="flex-start" 
          direction="column" 
          justify="center" 
          alignItems="center" >
        <Typography
          variant="h6"
          component="h6"
          style={{
            fontFamily: "Merienda, cursive"
          }} >
          Please Fill Out The Fields Below
        </Typography>
          <Grid item xl={4}>
            <TextField
              id="outlined-name"
              name="name"
              label="Name"
              onChange={this.changeHandler}
              margin="normal"
              variant="outlined" />
          </Grid>
          <Grid item xl={4}>
            <TextField
              id="outlined-email-input"
              label="E-mail"
              name="email"
              onChange={this.changeHandler}
              type="email"
              margin="normal"
              variant="outlined" />
          </Grid>
          <Grid item xl={4}>
            <TextField
              id="outlined-password-input"
              label="Password"
              name="password"
              onChange={this.changeHandler}
              type="password"
              margin="normal"
              variant="outlined" />
          </Grid>
          <Grid item style={{ marginTop: 10}}>
            <Button
              variant="outlined"
              size="large"
              color="inherit"
              onClick={this.signUp} >
              Sign-Up
            </Button>
          </Grid>
          </Grid>
        </Paper>
        </Grid>
        </Container>
      </Grid>
    </>
  );
  }
}
export default SignUp;
