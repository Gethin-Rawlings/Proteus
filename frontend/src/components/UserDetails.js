import React from 'react';
import "./Main.css";
import Header from './Header';
import Footer from './Footer';
import {Bootstrap, Grid, Row, Col, Form, ControlLabel, FormControl, FormGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

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
              <Header />
              
                  <form id="userDetails">
                  <Form horizontal>
                  <Grid>
                  <Row>
                    <Col componentClass={ControlLabel} lg={2}>
                      User Name
                    </Col>
                    <Col lg={2}>
                      <FormControl type="text" value={userName} readonly/>
                    </Col>
                    <Col componentClass={ControlLabel} lg={2}>
                      Indie
                    </Col>
                  <Col lg={2}>
                    <FormControl type="text" placeholder="Email" value={userIdIndie}/>
                  </Col>
                  </Row><br />
                  <Row>
                    <Col componentClass={ControlLabel} lg={2}>
                      First Name
                    </Col>
                    <Col lg={2}>
                      <FormControl type="text" value={userFirstname} readonly/>
                    </Col>
                    <Col componentClass={ControlLabel} lg={2}>
                      Last Name
                    </Col>
                    <Col lg={2}>
                      <FormControl type="text" value={userLastname} readonly/>
                    </Col>
                  </Row><br />
                  <Row>
                  <Col componentClass={ControlLabel} lg={2}>
                    Email
                  </Col>
                  <Col lg={2}>
                    <FormControl type="email" placeholder="Email" value={userEmailAddress}/>
                  </Col>
                  <Col componentClass={ControlLabel} lg={2}>
                  Mobile mumber
                  </Col>
                  <Col lg={2}>
                    <FormControl type="text" placeholder="Mobile Number" value={userMobileNumber}/>
                  </Col>
                  </Row><br />
                  <Row>
                  <Col componentClass={ControlLabel} lg={2}>
                  Account created
                  </Col>
                  <Col lg={2}>
                    <FormControl type="text" placeholder="Email" value={accountCreationDate}/>
                  </Col>
                  <Col componentClass={ControlLabel} lg={2}>
                  Account expired
                  </Col>
                  <Col lg={2}>
                    <FormControl type="text" placeholder="Email" value={accountExpiryDate}/>
                  </Col>
                  </Row><br />
                  <Row>
                  <Col componentClass={ControlLabel} lg={2}>
                  Password
                  </Col>
                  <Col lg={2}>
                    <FormControl type="Password" value={userPassword}/>
                  </Col>
                  <Col componentClass={ControlLabel} lg={2}>
                  Password changed
                  </Col>
                  <Col lg={2}>
                    <FormControl type="text" value={passwordLastChanged} readonly/>
                  </Col>
                  </Row><br />
                  </Grid>
                  </Form> 
                  </form>
             
              <Footer />
            </div>                   
           ); 
         } 
       } 
  export default UserDetails;