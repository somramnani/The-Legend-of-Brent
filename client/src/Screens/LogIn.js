import React, { Component } from 'react';
import LogIn from '../Components/LogIn'
import SignUp from '../Components/SignUp'
import TitleBar from '../Components/TitleBar'

class LogInScreen extends Component {
  render() {
    document.body.style.backgroundImage = "url(images/rain.jpg";
    document.body.style.backgroundRepeat = "repeat-y";
    document.body.style.height = "100%";

    return (
      <>
        <LogIn />
      </>
    );
  }
}

export default LogInScreen;
