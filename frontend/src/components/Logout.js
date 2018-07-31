import React from 'react';
import {withRouter} from "react-router-dom"

class Logout extends React.Component {
        constructor(props){
            super(props);
            this.state={isLoggedIn: ''};
        }
        componentDidMount() {
          const { history } = this.props
          sessionStorage.clear();
            history.push("/");
        }
        render() {
            return (null);
        }
      }
export default  withRouter(Logout)
