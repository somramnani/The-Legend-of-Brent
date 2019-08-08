import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import LogInScreen from "./Screens/LogIn";
import CharSelect from "./Screens/CharSelect";
import LogIn from "./Screens/LogIn";
import SignUp from "./Components/auth/SignUpModal";
import BattleScreen from "./Screens/Battle";
import monsters from "./data/Monster.json";
import { Provider } from 'react-redux';
import { loadUser } from './actions/authActions';
import store from './store'

const ENEMY_TIMER = 3000;
const ENEMY_TIMER_BIG = 1000;

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      character: null,
      monster: monsters[Math.floor(Math.random() * monsters.length)],
      counter: 0
    };
    this.enemyInterval = "";
  }

  enemyAttack = () => {
    const { character, monster } = this.state;
    const valueEnemyAttack = parseInt(monster.smallAttack);

    if (character && character.health >= 0) {
      this.setState({
        character: {
          ...character,
          health: parseInt(character.health) - valueEnemyAttack
        }
      });
    }
  };

  handleSmallAttackMonster = value => {
    this.setState({
      monster: {
        ...this.state.monster,

        health: this.state.monster.health - value
      }
    });
    if (this.state.monster.health <= 0) {
      alert(`You defeated ${this.state.monster.name}! You won!`);

      this.setState({
        monster: "",
        character: ""
      });
    }
  };

  componentDidMount() {
    store.dispatch(loadUser());
    this.enemyInterval = setInterval(this.enemyAttack, ENEMY_TIMER_BIG);
  }

  componentWillUnmount() {
    clearInterval(this.enemyInterval);
  }

  componentDidUpdate() {
    // log character and monster
    console.log(this.state.character);
    console.log(this.state.monster);
    if (this.state.character.health <= 0) {
      alert(`${this.state.monster.name} has defeated you!`);
     
      this.setState({
        monster: "",
        character: ""
      });
      return <Redirect to="/CharSelect" />;
    }
  }

  chooseCharacter = value => {
    this.setState({
      character: value
    });
  };

  handleAttackMonster = value => {
    this.setState({
      monster: {
        ...this.state.monster,
        health: this.state.monster.health - value
      }
    });
  };

  handleBigAttackMonster = value => {
    this.setState({
      monster: {
        ...this.state.monster,
        health: this.state.monster.health - value
      }
    });
  };

  handleSpecialAttackMonster = value => {
    this.setState({
      monster: {
        ...this.state.monster,
        health: this.state.monster.health - value
      }
    });
  };

  render() {
    return (
      <>
      <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={LogInScreen} />
          <Route exact path="/signup" component={SignUp} />
          <Route path="/CharSelect" render={() => (
            <CharSelect
              chooseCharacter={this.chooseCharacter}
              globalState={this.state} />
          )} />
          <Route path="/BattleScreen" render={() => (
            <BattleScreen
              handleSmallAttackMonster={this.handleSmallAttackMonster}
              handleBigAttackMonster={this.handleBigAttackMonster}
              handleSpecialAttackMonster={this.handleSpecialAttackMonster}
              globalState={this.state} />
          )} />
        </Switch>
      </Router>
      </Provider>
      </>
    );
  }
}

export default App;
