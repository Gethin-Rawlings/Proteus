import React, {Component} from 'react';
import './App2.css';
import Getnetworks from './Getnetworks'
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <form>
          <fieldset>
            <legend>Networks with open rounds from NODE rest and SQL SP</legend>
              <p>
                <label>Network </label>
                  <Getnetworks />
              </p>
          </fieldset>
      </form>
      </div> 
    );
  }
}

export default App;
