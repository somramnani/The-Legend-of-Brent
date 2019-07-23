
import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import TitleBar from './Components/TitleBar';
import CharSelect from './Screens/CharSelect';
import AuthHelperMethods from './Components/_AuthHelper';
import withAuth from './Components/withAuth';


class App extends Component {

  Auth = new AuthHelperMethods();

  _handleLogout = () => {
    this.Auth.logout()
    alert('you have successfully logged out')
    // this.props.history.replace('/user/login');
  }

  render(props) {
    return (
      <>

      <TitleBar />
        <LogIn />
        <Button
        onClick={this._handleLogout} 
        variant="contained"
        color="primary"
        > 
          Log Out 
        </Button>

        <TitleBar />
        <MonsterScreen />

      </>
    );
  }
}

export default App;
