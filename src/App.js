import React, { Component } from 'react';
import './App.css';
import LoginScreen from './Loginscreen';
import BattlePanel from './Components/BattlePanel';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
  }
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<LoginScreen appContext={this} key={"login-screen"}/>);
    this.setState({
      loginPage:loginPage
    })
  }
  render() {
    return (
      <>
      <div className="App">
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
    
    <BattlePanel />
      </>
    );
  }
}

export default App;
