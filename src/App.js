import React, { Component } from 'react';
import LogIn from './Screens/LogIn'
import BattlePanel from './Components/BattlePanel';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
    }
  }
  componentWillMount(){
    const loginPage =[];
    loginPage.push(<LogIn appContext={this} key={"login-screen"}/>);
    this.setState({
      loginPage:loginPage
    })
  }
  render() {
    return (
      <>
      <div className="App">
        {this.state.loginPage}
      </div>
      </>
    );
  }
}


export default App;
