import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }
render() {
    return (
   
        <div className>
        
          <div className = "login-div">
            <div className = "login" >
            
              <MuiThemeProvider>
                <div>
                  {/* <AppBar
                        title="Login"
              /> */}
                 <h3>Welcome</h3>
                  <TextField
                  
                    hintText ="Enter your Username"
                    floatingLabelText="Username"
                    onChange = {(event,newValue) => this.setState({username:newValue})}
                  />
                  <br/>
                  <TextField
                    type="password"
                    hintText="Enter your Password"
                    floatingLabelText="Password"
                    onChange = {(event,newValue) => this.setState({password:newValue})}
                  />
                  <br/>
                <RaisedButton label="Login" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
              </div>
            </MuiThemeProvider>
          </div>
        </div>
      </div>
   
    );
  }
}
const style = {
 margin: 15,
};
export default Login;