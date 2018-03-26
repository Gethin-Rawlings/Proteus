import React from 'react';
import "./Main.css";
import Header from './Header'
import Footer from './Footer'
import Getnetworks from "./Getnetworks";
import GetProductionDepts from "./GetProductionDepts";
import GetIndies from "./GetIndies";
import Displayprogrammes from "./Displayprogrammes";
import {Grid, Row, Col, Form, ControlLabel, FormControl, Button, ButtonToolbar, InputGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const urlForprogrammeSearch = users => 'http://ec2-52-56-248-133.eu-west-2.compute.amazonaws.com:5000/programmesearch'

class Programmesearch extends React.Component {
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
     fetch(urlForprogrammeSearch(this.props.users), { 
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
              <div  className="main">
              <Header />
              <section>
              <Grid>
              <Form horizontal>
                <form  onSubmit={this.handleSubmit} id='form'>
                <Row>
                  <Col componentClass={ControlLabel} sm={2}>
                    Title 
                  </Col>
                  <Col sm={2}>
                    <FormControl type="text" name="title" value={this.state.username} onChange={this.handleChange}/>
                  </Col>
                  </Row><br />
                  <Row>
                  <Col componentClass={ControlLabel} sm={2}>
                    Network
                  </Col>
                <Col sm={3}>
                <Getnetworks  name="network" network={this.handleChange}/> 
                </Col>
                </Row><br />
                <Row>
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
                <Col sm={2}>
                <GetIndies name="indie" indies={this.handleChange}/>
                </Col>
                </Row><br />
                <Row>
                  <Col componentClass={ControlLabel} sm={2}>
                    From
                  </Col>
                  <Col sm={2}>
              
                  <input className="from" type="date" name="fromdate" id="datetime" form ="form"></input>
                  </Col>
                </Row><br />
                <Row>
                  <Col componentClass={ControlLabel} sm={2}>
                    To
                  </Col>
                  <Col sm={2}>
              
                  <input className="to" type="date" name="todate" id="datetime" form ="form"></input>
                  </Col>
                </Row><br />
                <ButtonToolbar className="userAdminButtons">
                  <Button id="submit" bsStyle="primary"  className="submit" type="submit" form ="form">Search</Button>
                  <Button id="reset" bsStyle="danger"  type="reset" className="reset" form="form">Reset</Button>
                </ButtonToolbar><br />
                
                    
                </form>
                </Form>
                </Grid>
                <Displayprogrammes name='results'users={this.state.users} history={this.history}/>
              </section>
              <Footer />
            </div>          
             ); 
           } 
         } 

  export default Programmesearch;