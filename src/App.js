import React, { Component } from 'react'
import Dashboard from './components/dashboard'
import Header from './components/partial/header';
import Login from './components/Login'
import './assets/scss/Style.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <Header />
    <div>
      <Switch>
        <Route exact path="/dashboard" component={Login}/>
        <Route exact path="/" component={Dashboard} />
        <Route path="/login"  component={Login} />
      </Switch>
    </div>
  </Router>
  
    );
  }
}

export default App;
