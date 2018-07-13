import React, { Component } from 'react';
import ProgrammeSearch from "./components/ProgrammeSearch";
import Login from "./components/Login";
import Main from "./components/Main";
import UserAdmin from "./components/UserAdmin";
import UserDetails from "./components/UserDetails";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <div className="App-intro">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/main' component={Main} />
            <Route path='/UserAdmin' component={UserAdmin} />
            <Route path='/ProgrammeSearch' component={ProgrammeSearch} />
            <Route path='/UserDetails' component={UserDetails} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
