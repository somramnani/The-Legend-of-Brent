import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Button from "@material-ui/core/Button";
import LogInScreen from "./Screens/LogIn";
import TitleBar from "./Components/TitleBar";
import CharSelect from "./Screens/CharSelect";
import AuthHelperMethods from "./Components/_AuthHelper";
import GameStore from "./context/context";
import withAuth from "./Components/withAuth";
import PrebattleScreen from "./Screens/CharVsMon";
import BattleScreen from "./Screens/Battle";
import LogIn from "./Screens/LogIn";
import SignUp from "./Components/SignUp";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      character: null
    };
  }

  componentDidUpdate() {
    console.log(this.state.character);
  }
  Auth = new AuthHelperMethods();

  _handleLogout = () => {
    this.Auth.logout();
    alert("you have successfully logged out");
    // this.props.history.replace('/user/login');
  };

  render(props) {
    return (
      //To render pages:
      // 1. Make sure Brents bullshit (Gamestore.Provider) is commented out.
      // 2. Then Below the <> Type in what pages you want rendered.
      <>
        <CharSelect />
        {/* <SignUp /> */}

  
      </>
      // <GameStore.Provider
      //   value={{
      //     globalState: this.state,
      //     chooseCharacter: value => this.setState({ character: value })
      //   }}
      // >
      //   <GameStore.Consumer>
      //     {({ globalState, chooseCharacter }) => (
      //       <Router>
      //         <div>
      //           <Switch>
      //             <Route exact path="/" component={LogIn} />
      //             <Route exact path="/login" component={LogIn} />
      //             <Route exact path="/signup" component={SignUp} />
      //           </Switch>
      //         </div>
      //       </Router>
      //     )}
      //   </GameStore.Consumer>
      // </GameStore.Provider>
    );
  }
}

export default App;
