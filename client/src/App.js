import React from "react";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";
import TitleBar from "./Components/TitleBar";
import CharSelect from "./Screens/CharSelect";
import LoginScreen from "./Screens/LogIn";
import AuthHelperMethods from "./Components/_AuthHelper";
import withAuth from "./Components/withAuth";
import Battle from "./Components/Battle";

class App extends React.Component {
  state = {
    signedIn: false
  };

  Auth = new AuthHelperMethods();
  _handleLogout = () => {
    this.props.history.replace("/user/login");
  };

  render() {
    return (
      <>
        <TitleBar />
        <Battle />
      </>
    );
  }
}

export default App;
