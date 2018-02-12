import React, { Component } from 'react';

//import './App.css';
import Login from "./components/Login";
import Main  from "./components/Main";
import { Switch, Route } from 'react-router-dom'


class App extends Component {
  
  render() {
    return (
      <div>
        <section className="App-intro">
        <Switch>
          <Route exact path ='/' component={Login}/>
          <Route path ='/main' component={Main}/>
        </Switch>  
        </section>
        
      </div>
    );
  }
}

export default App;
