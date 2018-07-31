import React from 'react';
import "./Main.css";
import Navbar from "./Navbar";
import Footer from './Footer';
import "./userDetails.css";
import { updateUsers } from './apiCalls';

class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      requestFailed: false,
      value: ''
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
    const dataForm = new FormData(event.target);
    try {
      await updateUsers(dataForm)
      
    } catch (err) {
      console.log(err)
    }
    alert('Changes Saved')
  }
  componentDidMount() {
    const user = this.props.location.state.detail
    const urlForuserDetails = () => 'http://localhost:5000/userDetails?user=' + user   
    fetch(urlForuserDetails(this.props.users))
      .then(response => {
        if (!response.ok) {
          throw Error("Network request failed")
        }
        return response
      })
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
          userIdIndie: d.USR_INDIE_IND
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
    const passwordLastChanged = returnData.USR_PASSWORD_LAST_CHANGED
    return (
      <div className="main">
        <Navbar />
        <section className="App-intro">
          <section className='programmeSearch'>
            <form id="userDetails" className="userDetails" onSubmit={this.handleSubmit}>

              <label for="username" className="userName">User Name</label>
              <input type="text" name="userName" form="userDetails" value={userName} readonly />
              <label for="userFirstname" className="userFirstname">First Name</label>
              <input type="text" name="userFirstname" form="userDetails" value={this.state.userFirstname} onChange={this.handleChange} />
              <label for="userLastname" className="userLastname">Last Name</label>
              <input type="text" name="userLastname" form="userDetails" value={this.state.userLastname} onChange={this.handleChange} />
              <label for="userEmailAddress" className="userEmailAddress">Email address</label>
              <input type="email" name="userEmailAddress" form="userDetails" value={this.state.userEmailAddress} onChange={this.handleChange} />
              <label for="userMobileNumber" className="userMobileNumber">Mobile mumber</label>
              <input type="text" name="userMobileNumber" form="userDetails" value={this.state.userMobileNumber} onChange={this.handleChange} />
              <label for="accountCreationDate" className="accountCreationDate">Account created on</label>
              <input type="text" form="userDetails" name="accountCreationDate" value={accountCreationDate} readonly />
              <label for="accountExpiryDate" className="accountExpiryDate">Account expired on</label>
              <input type="text" form="userDetails" name="accountExpiryDate" value={this.state.accountExpiryDate} onChange={this.handleChange} />
              <label for="userPassword" className="userPassword">Password</label>
              <input type="password" name="userPassword" form="userDetails" value={this.state.userPassword} onChange={this.handleChange} />
              <label for="passwordLastChanged" className="passwordLastChanged">Password changed</label>
              <input type="text" form="userDetails" name="passwordLastChanged" value={passwordLastChanged} readonly />
              <label for="userIdIndie" className="userIdIndie">Indie</label>
              <input type="text" name="userIdIndie" form="userDetails" value={this.state.userIdIndie} onChange={this.handleChange} />
              <button id="loginbutton" className="loginbutton">Save</button>
            </form>
          </section>
        </section>
        <Footer />
      </div>
    );
  }
}

export default UserDetails;