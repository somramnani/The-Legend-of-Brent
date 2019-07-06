import React from 'react';
import {BrowserRouter as Router, Route,} from 'react-router-dom';
import './App.css';
import SignIn from './screens/SignIn';
import Characters from './screens/Characters';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Route exact path="/" component={SignIn} />
        <Route exact path="/Characters" component={Characters} />
      </>
    </Router>
  );
}

export default App;
