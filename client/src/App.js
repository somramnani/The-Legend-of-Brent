import MonsterScreen from "../src/Screens/MonsterSelect";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import LogInScreen from "./Screens/LogIn";
import SignUp from "./Components/SignUp";
import TitleBar from "./Components/TitleBar";
import CharSelect from "./Screens/CharSelect";
import AuthHelperMethods from "./Components/_AuthHelper";
import withAuth from "./Components/withAuth";
import GameStore from "./context/context";
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
    // this.props.history.replace('/user/login');
  };

  render(props) {
    return (
      <GameStore.Provider
        value={{
          globalState: this.state,
          chooseCharacter: value => this.setState({ character: value })
        }}
      >
        <GameStore.Consumer>
          {({ globalState, chooseCharacter }) => (
            <>
              <LogInScreen
                globalState={globalState}
                chooseCharacter={chooseCharacter}
              />
              <Button
                onClick={this._handleLogout}
                variant="contained"
                color="primary"
              >
                Log Out
              </Button>
            </>
          )}
        </GameStore.Consumer>
      </GameStore.Provider>
    );
  }
}

export default App;
