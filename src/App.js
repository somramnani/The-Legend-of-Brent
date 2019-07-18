import React, { Component } from 'react';
import Battle from './Screens/Battle';
import CharSelectScreen from './Screens/Characters';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
    }
  }
  componentWillMount(){
    const loginPage =[];
    loginPage.push(<CharSelectScreen appContext={this} key={"login-screen"}/>);
    this.setState({
      loginPage: loginPage
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
