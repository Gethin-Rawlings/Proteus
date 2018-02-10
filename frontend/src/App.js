import React, { Component } from 'react';
import logo from './bbc_logo.png';
import './App.css';
import Login from "./components/Login";
import Main  from "./components/Main";
import { Switch, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <section className='App-nav'>
          <img src={logo} className="App-logo" alt="logo" />
        </section>
        <section className="App-headerside"></section>
        <header className="App-header">
          <section className="App-title">Welcome to Proteus</section>
        </header>
        <section className="App-intro">
        <Switch>
          <Route exact path ='/' component={Login}/>
          <Route path ='/main' component={Main}/>
        </Switch>  
        </section>
        <footer className="App-footer">Copyright BBC 2001-2018  |  Proteus 5</footer>
      </div>
    );
  }
}

export default App;
