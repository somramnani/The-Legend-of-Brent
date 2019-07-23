import React from 'react';
import LogIn from '../Components/LogIn'
import SignUp from '../Components/SignUp'
import TitleBar from '../Components/TitleBar'

class LogInScreen extends React.Component {
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