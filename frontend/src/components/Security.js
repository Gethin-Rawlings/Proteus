import React from 'react';

class Security extends React.Component {
        constructor(props){
            super(props);
            this.state={isLoggedIn: ''};
        }
        componentDidMount() {
          const { isLoggedIn, history } = this.props
          
          if (!isLoggedIn) {
            // set the current url/path for future redirection (we use a Redux action)
            // then redirect (we use a React Router method)
            history.push("/");
          }
        }
      
        render() {
          
            return this.props.children
          
        }
      }

export default Security