import React, { Component } from "react";
import LogIn from "../Components/LogIn";
import SignUp from "../Components/SignUp";
import TitleBar from "../Components/TitleBar";
import AuthHelperMethods from "../Components/_AuthHelper";
import Axios from "axios";

class LogInScreen extends Component {
  render() {
    document.body.style.backgroundImage = "url(images/rain.jpg";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.height = "100%";

    Axios.get('/api/users').then(response => res.json()).then(data => { console.log(data)})

    return (
      <>
        <LogIn />
      </>
    );
  }
}

export default LogInScreen;
