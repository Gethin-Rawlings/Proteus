import React, { Component } from 'react';
import ProgrammeSearch from "./components/ProgrammeSearch";
import Login from "./components/Login";
import Main from "./components/Main";
import UserAdmin from "./components/UserAdmin";
import UserDetails from "./components/UserDetails";
import Logout from "./components/Logout";
import Reports from "./components/Reports";
import ProgrammeDetails from "./components/ProgrammeDetails";
import Brands from "./components/Brands";
import Proposalsearch from "./components/Proposalsearch";
import { Switch, Route, BrowserRouter } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <div className="App-intro">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/main' component={Main} />
            <Route path='/UserAdmin' component={UserAdmin} />
            <Route path='/Reports' component={Reports} />
            <Route path='/ProgrammeSearch' component={ProgrammeSearch} />
            <Route path='/UserDetails' component={UserDetails} />
            <Route path='/Proposalsearch' component={Proposalsearch} />
            <Route path='/Logout' component={Logout} />
            <Route path='/ProgrammeDetails' component={ProgrammeDetails} />
            <Route path='/Brands' component={Brands} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
