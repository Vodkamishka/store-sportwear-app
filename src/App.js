import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './components/MainPage/MainPage';
import Default from './components/Default';
import Details from './components/Details';
import Navbar from './components/Navbar/Navbar';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className = "MainBlock">
        <Navbar className = "navbar"/>
        <Switch>
          <Route exact path="/" component = {MainPage} />
          <Route path="/details" component = {Details} />
          <Route component = {Default} />
        </Switch>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
