import React, { Component } from 'react';

import './App.css';
import Login from "./components/Login";
import Main  from "./components/Main";
import UserAdmin  from "./components/UserAdmin";
import { Switch, Route } from 'react-router-dom'


class App extends Component {
  
  render() {
    return (
      <div>
        <section className="App-intro">
        <Switch>
          <Route exact path ='/' component={Login}/>
          <Route path ='/main' component={Main}/>
          <Route path ='/UserAdmin' component={UserAdmin}/>
        </Switch>  
        </section>
        <footer className="App-footer">Copyright BBC 2001-2018  |  Proteus 5</footer>
        
      </div>
    );
  }
}

export default App;
