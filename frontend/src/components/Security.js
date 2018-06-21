import React from 'react';

class Security extends React.Component {
        constructor(props){
            super(props);
            this.state={isLoggedIn: ''};
        }
        componentDidMount() {
          const { isLoggedIn, history } = this.props
          if (!isLoggedIn) {
            history.push("/");
          }
        }
        render() {
            return this.props.children
        }
      }

export default Security