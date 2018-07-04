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
            console.log('Wibble  Sec')
          }
        }
        render() {
            return this.props.children
        }
      }

export default Security
/*
export const logedIn = async () => {
  const response = await sessionStorage.getItem('loggedIn');
  if (response) {
    history.push("/main");
    console.log('Wibble  Sec')
  }
}
*/
