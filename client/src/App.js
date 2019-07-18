import React, { Component } from 'react';

// import LogIn from './Screens/LogIn'
// import Characters from './Screens/Characters'
// import axios from 'axios'
// import Battle from './Screens/Battle';

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       loginPage:[],
//     }
//   }
//   componentWillMount(){
//     const loginPage =[];
//     loginPage.push(<Battle appContext={this} key={"login-screen"}/>);
//     this.setState({
//       loginPage:loginPage
//     })
//   }
//   render() {
//     return (
//       <>
//       <div className="App">
//           {this.state.loginPage}
//       </div>
//       </>
//     );
//   }
// }

class App extends Component {

  state = {
    renderedResponse: ""
  }

getResponse = async() => {
  const response = await fetch('/')
  const body = await response.json();
  if(response.status !== 200) throw Error(body.message); 
  return body;
}

componentDidMount() {
  this.getResponse()
    .then(res => {
      const someData = res;
      this.setState({ renderedResponse: someData });
    })
}

render() {
  const { renderedResponse } = this.state
  return(
    <div className="App">
      <h2>Call out to API!</h2>
        <p>{renderedResponse.express}</p>
     </div>
  )
}

}

export default App;
