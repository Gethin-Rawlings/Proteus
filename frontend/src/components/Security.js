import React from 'react';
import {withRouter} from "react-router-dom"

class Security extends React.Component {
        constructor(props){
            super(props);
            this.state={isLoggedIn: ''};
        }
        componentDidMount() {
          const { history } = this.props
          const loggedIn = sessionStorage.getItem('loggedIn');
          if (!loggedIn) {
            history.push("/");
          }
        }
        render() {
            return (null);
        }
      }
export default  withRouter(Security)
