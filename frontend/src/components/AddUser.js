import React from 'react';
import "./Main.css";
import Navbar from "./Navbar";
import Footer from './Footer';
import "./userDetails.css";
import { addUser } from './apiCalls';

class AddUser extends React.Component {
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
    if (window.confirm("Save?")) { 
      const dataForm = new FormData(event.target);
      console.log (dataForm.userName)
      try {
        await addUser(dataForm)
      } catch (err) {
        console.log(err)
      }
      alert('Changes Saved')
    }
  }
  render() {
    return (
      <div className="main">
        <Navbar />
        <section>
          <section className='programmeSearch'>
            <form id="userDetails" className="userDetails" onSubmit={this.handleSubmit}>
              <label className="userName">User Name</label>
              <input type="text" name="userName" form="userDetails" required value={this.state.userName}  onChange={this.handleChange} />
              <label className="userFirstname">First Name</label>
              <input type="text" name="userFirstname" form="userDetails" required value={this.state.userFirstname} onChange={this.handleChange} />
              <label className="userLastname">Last Name</label>
              <input type="text" name="userLastname" form="userDetails" required value={this.state.userLastname} onChange={this.handleChange} />
              <label className="userEmailAddress">Email address</label>
              <input type="email" name="userEmailAddress" form="userDetails" required value={this.state.userEmailAddress} onChange={this.handleChange} />
              <label className="userMobileNumber">Mobile mumber</label>
              <input type="text" name="userMobileNumber" form="userDetails" value={this.state.userMobileNumber} onChange={this.handleChange} />
              <label className="userPassword">Password</label>
              <input type="password" name="userPassword" form="userDetails" required value={this.state.userPassword} onChange={this.handleChange} />
              <label className="userIdIndie">Indie</label>
              <input type="checkbox" name="userIdIndie" form="userDetails" value={true} onChange={this.handleChange} />
              <button id="save" className="button">Save</button>
              <button id="reset" type="reset" className="button" form="form">Reset</button>
            </form>
          </section>
        </section>
        <Footer />
      </div>
    );
  }
}

export default AddUser;