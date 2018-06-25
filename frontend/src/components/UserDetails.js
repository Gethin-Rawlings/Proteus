import React from 'react';
import "./Main.css";
import Navbar from "./Navbar";
import Footer from './Footer';
import "./userDetails.css"

class UserDetails extends React.Component {
  constructor(props) { 
    super(props); 
    this.state = {
      requestFailed: false,
      value: ''
  }

   } 
   componentDidMount(){
    const loggedIn = sessionStorage.getItem('loggedIn');
    const user =this.props.location.state.detail
    const urlForuserDetails = users => 'http://ec2-52-56-248-133.eu-west-2.compute.amazonaws.com:5000/userDetails?user='+user
    console.log (urlForuserDetails)
    const { history } = this.props;
      if(!loggedIn) {
        history.push("/");
        }
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
                    userDetails: d
                    
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
        const userFirstname = returnData.USR_FIRST_NAME
        const userLastname = returnData.USR_LAST_NAME
        const userEmailAddress = returnData.USR_EMAIL_ADDRESS
        const userMobileNumber = returnData.USR_MOBILE_NUMBER
        const accountCreationDate = returnData.USR_ACCOUNT_CREATED
        const accountExpiryDate = returnData.USR_ACCOUNT_EXPIRY
        const userPassword = returnData.USR_PASSWORD
        const passwordLastChanged= returnData.USR_PASSWORD_LAST_CHANGED
        const userIdIndie = returnData.USR_INDIE_IND
        return ( 
            <div className="main">
              <Navbar />
              <section className="App-intro">
                <section className='programmeSearch'>
                  <form id="userDetails" className="userDetails">
                  
                  <label for="username" className="userName">User Name</label>
                  <input type="text" name="userName" form="userDetails" value={userName} readonly/>
                  <label for="userFirstname" className="userFirstname">First Name</label>
                  <input type="text" name="userFirstname" form="userDetails"  value={userFirstname} />
                  <label for="userLastname" className="userLastname">Last Name</label>
                  <input type="text" name="userLastname" form="userDetails"  value={userLastname} />
                  <label for="userEmailAddress" className="userEmailAddress">Email address</label>
                  <input type="email" name="userEmailAddress" form="userDetails"  value={userEmailAddress} />
                  <label for="userMobileNumber" className="userMobileNumber">Mobile mumber</label> 
                  <input type="text" name="userMobileNumber" form="userDetails"  value={userMobileNumber} />
                  <label for="accountCreationDate" className="accountCreationDate">Account created on</label>
                  <input type="text" form="userDetails"  name="accountCreationDate" value={accountCreationDate} readonly/>
                  <label for="accountExpiryDate" className="accountExpiryDate">Account expired on</label>
                  <input type="text" form="userDetails"  name="accountExpiryDate" value={accountExpiryDate} />
                  <label for="userPassword" className="userPassword">Password</label>
                  <input type="password" name="userPassword" form="userDetails"  value={userPassword} />
                  <label for="passwordLastChanged" className="passwordLastChanged">Password changed</label>
                  <input type="text" form="userDetails"  name="passwordLastChanged" value={passwordLastChanged} readonly/>
                  <label for="userIdIndie" className="userIdIndie">Indie</label>
                  <input type="text" name="userIdIndie" form="userDetails"  value={userIdIndie} />
                  </form>
                </section>
              </section>
              <Footer />
            </div>              
           ); 
         } 
       } 

  export default UserDetails;