import React from "react";
import decode from "jwt-decode";
import { Redirect } from "react-router-dom"

class AuthHelperMethods extends React.Component {
  login = (username, password) =>
    this.fetch("/user/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password
      })
    }).then(res => {
      this.setToken(res.token);
      return Promise.resolve(res);
    });

  logout = () => {
    localStorage.removeItem("id_token");
  };

  loggedIn = () => {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  };

  isTokenExpired = token => {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      console.log("expired check failed! Line 42: AuthService.js");
      return false;
    }
  };

  setToken = idToken => {
    localStorage.setItem("id_token", idToken);
    console.log("id token has been set");
  };

  getToken = () => {
    console.log("getting id token");
    return localStorage.getItem("id_token");
  };

  getConfirm = () => {
    let answer = decode(this.getToken());
    console.log("Recieved answer!");
    return answer;
  };

  fetch = (url, options) => {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    if (this.loggedIn()) {
      headers["Authorization"] = "Bearer " + this.getToken();
    }
    return fetch(url, {
      headers,
      ...options
    })
      .then(this._checkStatus)
      .then(response => response.json());
  };

  _checkStatus = response => {
    if (response.status >= 200 && response.status < 300) {
      // Success status lies between 200 to 300
      return response;
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  };
}

export default AuthHelperMethods;
