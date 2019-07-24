import React, { Component } from 'react';
import LogIn from '../Components/LogIn'
import SignUp from '../Components/SignUp'
import TitleBar from '../Components/TitleBar'

class LogInScreen extends Component {
  render() {
    return(
      <>
        <TitleBar />
        <LogIn />
      </>
    )
  }
}

export default LogInScreen;