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

export default Login;