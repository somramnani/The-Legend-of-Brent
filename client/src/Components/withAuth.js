import React, { Component } from "react";
import AuthHelperMethods from "./_AuthHelper";

export default function withAuth(AuthComponent) {
  const Auth = new AuthHelperMethods();

  return class AuthWrapped extends Component {
    state = {
      confirm: null,
      loaded: false
    }

    componentDidMount() {
      if (!Auth.loggedIn()) {
        this.props.history.replace("/user/login");
      } else {
        /* Try to get confirmation message from the Auth helper. */
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
          this.props.history.replace("/user/login");
        }
      }
    }

    render() {
      if (this.state.loaded === true) {
        if (this.state.confirm) {
          console.log("confirmed!");
          return (
            <AuthComponent
              history={this.props.history}
              confirm={this.state.confirm}
            />
          );
        } else {
          console.log("not confirmed!");
          return null;
        }
      } else {
        return null;
      }
    }
  };
}
