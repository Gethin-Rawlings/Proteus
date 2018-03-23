import React from 'react';
import "./Main.css";
import Header from './Header';
import Footer from './Footer';
import Getnetworks from "./Getnetworks";
import GetProductionDepts from "./GetProductionDepts";
import GetIndies from "./GetIndies";
import Displayusers from "./Displayusers";
import {Bootstrap, Grid, Row, Col, Form, ControlLabel, FormControl, FormGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const urlForUserAdmin = users => 'http://ec2-52-56-248-133.eu-west-2.compute.amazonaws.com:5000/userAdmin'

class UserAdmin extends React.Component {
  constructor(props) { 
    super(props); 
      this.state={network: '', production:'', indie:'',users:'[{"usr_name":"Waiting"}]'};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this); 
   } 
   componentDidMount(){
    const loggedIn = sessionStorage.getItem('loggedIn');
    const { history } = this.props;
      if(!loggedIn) {
        history.push("/");
        }
      } 
   handleChange(event) {
     
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({[name]: value});
  }
   handleSubmit(event) { 
    event.preventDefault(); 
    const data = new FormData(event.target);
     fetch(urlForUserAdmin(this.props.users), { 
       method: 'POST', 
       body: data
     }).then(response => response.json().then(data => { 
      this.setState({ 
         users: JSON.stringify(data)
      }) 
    } ))      
   } 
    render() {
             return ( 
              <div className="main">
                <Header />
                <section className="App-intro">
                <Grid>
                <Form horizontal>
                  <form  onSubmit={this.handleSubmit} id='form'>
                  <Row>
                    <Col componentClass={ControlLabel} sm={2}>
                      User Name
                    </Col>
                    
                    <Col sm={2}>
                      <FormControl type="text" value={this.state.username} onChange={this.handleChange}/>
                    </Col>
                    </Row><br />
                    <Row>
                    <Col componentClass={ControlLabel} sm={2}>
                      Network
                    </Col>
                  <Col sm={3}>
                  <Getnetworks  name="network" network={this.handleChange}/> 
                  </Col>
                  <Col componentClass={ControlLabel} sm={2}>
                      Production Dept
                    </Col>
                  <Col sm={2}>
                  <GetProductionDepts name="production" className="production" production={this.handleChange}/>
                  </Col>
                  </Row><br />
                  <Row>
                  <Col componentClass={ControlLabel} sm={2}>
                      Indies
                    </Col>
                  <Col lg={1}>
                  <GetIndies name="indie" indies={this.handleChange}/>
                  </Col>
                  </Row><br />
                  <button id="submit" className="submit" form ="form">Search</button>
                  <button id="reset" type="reset" className="reset" form="form">Reset</button>
                  </form>
                  </Form>
                  </Grid>
                  <Displayusers className='results' name='results'users={this.state.users} history={this.history}/>
                </section>
                <Footer />
              </div>
              
             ); 
           } 
         } 

  export default UserAdmin;