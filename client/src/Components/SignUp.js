import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Typography, Grid, Container, Icon } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import { __values } from "tslib";
import axios from "axios";
import { Redirect } from "react-router-dom";
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

  signUp = event => {
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
          alert(`Your account was successfully created!`);
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
    document.body.style.backgroundRepeat = "repeat-y";
    document.body.style.height = "100%";

    return (
      <>
        <TitleBar />
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
