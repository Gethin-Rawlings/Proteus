import React from 'react';
import "./Main.css";
import Navbar from "./Navbar";
import Footer from './Footer';
import UserRoles from './UserRoles';
import "./userDetails.css";
import { updateUsers , userDetails } from './apiCalls';

class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      requestFailed: false,
      value: '',
      returnRoles: '[]'
    }
  }
  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  }
  async handleSubmit(event) {
    event.preventDefault();
    if (window.confirm("Save?")) { 
      const dataForm = new FormData(event.target);
      console.log(dataForm.userEmailAddress)
      try {
        await updateUsers(dataForm)
      } catch (err) {
        console.log(err)
      }
      alert('Changes Saved')
    }
  }
  async componentDidMount() {
    const user = this.props.location.state.detail  
    await userDetails(user)
      .then(d => d.json())
      .then(d => {
        this.setState({
          userDetails: d,
          userFirstname: d.USR_FIRST_NAME,
          userLastname: d.USR_LAST_NAME,
          userEmailAddress: d.USR_EMAIL_ADDRESS,
          userMobileNumber: d.USR_MOBILE_NUMBER,
          userPassword: d.USR_PASSWORD,
          accountExpiryDate: d.USR_ACCOUNT_EXPIRY,
          userIdIndie: d.USR_INDIE_IND,
          passwordLastChanged: d.USR_PASSWORD_LAST_CHANGED
        })
      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  }
  render() {
    if (!this.state.userDetails) return <p>Loading...</p>
    const returnData = this.state.userDetails;
    const userName = returnData.USR_NAME
    const accountCreationDate = returnData.USR_ACCOUNT_CREATED
    return (
      <div className="main">
        <Navbar />
        <section>
          <section className='programmeSearch'>
            <form id="userDetails" className="userDetails" onSubmit={this.handleSubmit}>
              <label className="userName">User Name</label>
              <input type="text" name="userName" form="userDetails" value={userName} readOnly/>
              <label className="userFirstname">First Name</label>
              <input type="text" name="userFirstname" form="userDetails" value={this.state.userFirstname} onChange={this.handleChange} />
              <label className="userLastname">Last Name</label>
              <input type="text" name="userLastname" form="userDetails" value={this.state.userLastname} onChange={this.handleChange} />
              <label className="userEmailAddress">Email address</label>
              <input type="email" name="userEmailAddress" form="userDetails" value={this.state.userEmailAddress} onChange={this.handleChange} />
              <label className="userMobileNumber">Mobile mumber</label>
              <input type="text" name="userMobileNumber" form="userDetails" value={this.state.userMobileNumber} onChange={this.handleChange} />
              <label className="accountCreationDate">Account created on</label>
              <input type="text" form="userDetails" name="accountCreationDate" value={accountCreationDate} readOnly/>
              <label className="accountExpiryDate">Account expired on</label>
              <input type="text" form="userDetails" name="accountExpiryDate" value={this.state.accountExpiryDate} onChange={this.handleChange} />
              <label className="userPassword">Password</label>
              <input type="password" name="userPassword" form="userDetails" value={this.state.userPassword} onChange={this.handleChange} />
              <label className="passwordLastChanged">Password changed</label>
              <input type="text" form="userDetails" name="passwordLastChanged" value={this.state.passwordLastChanged} onChange={this.handleChange}/>
              <label className="userIdIndie">Indie</label>
              <input type="text" name="userIdIndie" form="userDetails" value={this.state.userIdIndie} onChange={this.handleChange} />
              <button id="save" className="button">Save</button>
              <button id="reset" type="reset" className="button" form="form">Reset</button>
            </form>
            <section>
              <UserRoles user={userName}/>
            </section>
            
          </section>
        </section>
        <Footer />
      </div>
    );
  }
}

export default UserDetails;