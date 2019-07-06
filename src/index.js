import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));


class Form extends Component {
  state = {
    email: "",
    firstName: "",
    password: ""
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (!this.state.email || !this.state.firstName) {
      alert("Fill out your email and name please!");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state
          .firstName}`
      );
    } else {
      alert(`Hello ${this.state.email} ${this.state.firstName}`);
    }

    this.setState({
      email: "",
      firstName: "",
      password: ""
    });
  };

  render() {
    return (
      <div>
        <p>
          Hello {this.state.firstName}
        </p>
        <form className="form">
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Email"
          />
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
// I think this code goes here. Whoever reads this, could you verify?

export default Form;
serviceWorker.unregister();
