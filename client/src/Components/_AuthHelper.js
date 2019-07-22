import react from 'react';
import decode from 'jwt-decode';

class AuthHelperMethods extends React.Component {

  login = (username, password) => {
    return this.fetch(`/user/login`, {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      }).then(res => {
        this.setToken(res.token)
        return Promise.resolve(res);
      })
    } )
  }

  loggedIn = () => {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken(); // Getting token from localstorage
    return !!token && !this.isTokenExpired(token); // handwaiving here
  };

  isTokenExpired = token => {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        // Checking if token is expired.
        return true;
      } else return false;
    } catch (err) {
      console.log("expired check failed! Line 42: AuthService.js");
      return false;
    }
  };

  setToken = idToken => {
    // Saves user token to localStorage
    localStorage.setItem("id_token", idToken);
  };

  getToken = () => {
    // Retrieves the user token from localStorage
    return localStorage.getItem("id_token");
  };

}