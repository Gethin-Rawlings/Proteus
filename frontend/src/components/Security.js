import React from 'react';

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
            return this.props.children
        }
      }

export default Security
