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
import LogIn from "./Screens/LogIn";
import SignUp from "./Components/SignUp";
import BattleScreen from "./Screens/Battle";

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
  };

  chooseCharacter = value => {
    this.setState({
      character: value
    });
  };

  render() {
    return (
      <>
        <CharSelect />
        {/* <Router>
          <div>
            <Switch>
              <Route exact path="/" component={LogIn} />
              <Route exact path="/login" component={LogIn} />
              <Route exact path="/signup" component={SignUp} />
              <Route
                path="/CharSelect"
                render={() => (
                  <CharSelect
                    chooseCharacter={this.chooseCharacter}
                    globalState={this.state}
                  />
                )}
              />
              <Route
                path="/BattleScreen"
                render={() => <BattleScreen globalState={this.state} />}
              />
            </Switch>
          </div>
        </Router> */}
      </>
    );
  }
}

export default App;
