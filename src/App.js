import React, { Component } from 'react';
import './App.css';
import LoginScreen from './Loginscreen';

// import Navbar from './Components/Layout/Navbar';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Footer from './Components/Layout/Footer';
// import Home from './Components/Layout/Home';
// import Social from './Components/social/Social';

// THE WEBSITE ALSO IMPORTED ALL OF THESE AS WELL. I CREATED THE PROPER FILES FOR ROUTING PURPOSES, BUT THEYRE EMPTY.
  
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
    this.connecToServer = this.connecToServer.bind(this);
  }
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<LoginScreen appContext={this} key={"login-screen"}/>);
    this.setState({
      loginPage:loginPage
    })
  }
  connecToServer() {
    fetch('/');
  }
  componentDidMount() {
        this.connecToServer();
  }
  render() {
    return (
      <div className="App">
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
    );
  }
}

export default App;

// render() {
//   return (<Router>
//     <div className="container">
//       <Navbar />
//       <Route exact path="/" component={Home} />
//       <Route exact path="/social" component={Social} />
//       <Footer />
//     </div>
//   </Router>);
// }
// }