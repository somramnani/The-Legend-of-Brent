import React, { Component } from "react";
import AuthHelperMethods from "./_AuthHelper";
import { Redirect } from 'react-router-dom'

export default function withAuth(AuthComponent) {
  const Auth = new AuthHelperMethods();

  return class AuthWrapped extends Component {
    state = {
      confirm: null,
      loaded: false
    }

    componentDidMount() {
      if (!Auth.loggedIn()) {
        return <Redirect to="/login" />
      } else {
        try {
          const confirm = Auth.getConfirm();
          console.log("confirmation is:", confirm);
          this.setState({
            confirm: confirm,
            loaded: true
          });
          } catch (err) {
            console.log(err);
            Auth.logout();
            return <Redirect to="/login" />
        }
      }
    }
    render() {  
      if (this.state.loaded === true) {
        if (this.state.confirm) {
          return (
            <AuthComponent
              confirm={this.state.confirm}
            />
          );
        } else {
          alert("not confirmed!");
          return null;
        }
      } else {
        return null;
      }
    }
  };
}
