import React, { Component } from 'react';

import ProgrammeSearch from "./components/ProgrammeSearch";
import Login from "./components/Login";
import Main  from "./components/Main";
import Security from "./components/Security";
import UserAdmin  from "./components/UserAdmin";
import { Switch, Route } from 'react-router-dom'

const isLoggedIn = false;

class App extends Component {

  
  render() {
    return (
      <div  className="App-intro">       
        <Switch>
          <Route exact path ='/' component={Login}/>
          <Route component={Security}>
            <Route path ='/main' component={Main}/>
            <Route path ='/UserAdmin' component={UserAdmin}/>
            <Route path ='/ProgrammeSearch' component={ProgrammeSearch}/>
          </Route>
        </Switch>          
      </div>
    );
  }
}

export default App;
