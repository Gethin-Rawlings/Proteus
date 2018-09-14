import React from 'react';
import "./Main.css";
import "./userDetails.css";
import { userRoles  } from './apiCalls';

class UserRoles extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      requestFailed: false,
      value: '',
      user:''
    }
  }
  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  }

  async componentDidMount() {
    const user = this.props.user
    await userRoles(user) 
      .then(data => {
        this.setState({ userRoles: data})
      })
  }
  render() {
    if (!this.state.userRoles) return <p>Loading...</p>
    const roles = this.state.userRoles
    return (
      <div className='roles'>
        {roles.map(p => <section key={p.ROLE_NAME} value={p.ROLE_NAME}>{p.ROLE_DISPLAY_NAME}</section>)}
        <section></section>
      </div>
    );
  }
}

export default UserRoles;