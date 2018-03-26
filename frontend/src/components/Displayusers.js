import React, { Component } from 'react';
import {withRouter} from "react-router-dom"
import { Table }  from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class Displayusers extends Component {       
  constructor(props) { 
    super(props); 
      this.state={user:'[{"USR_NAME":""}]', history:this.props.history};
      this.handleClick = this.handleClick.bind(this); 
   } 
   handleClick(event) {
    const value = event.target.id;
    if (event){ 
      this.props.history.push({
          pathname: "/UserDetails",
          state: { detail: value} 
      });
    }
  }
             render() {  
                const returnData = JSON.parse(this.props.users)
                return (
                    <div className= "results" >
                     <Table striped bordered hover responsive >
                     <thead >
                       <tr>
                         <th>User Name</th>
                         <th>First Name</th>
                         <th>Last Name</th>
                         <th>Email Adress</th>
                       </tr>
                     </thead>
                     <tbody>
                       {returnData.map(p => <tr onClick={this.handleClick}><td id={p.USR_NAME} >{p.USR_NAME}</td ><td id={p.USR_NAME}>{p.USR_FIRST_NAME}</td><td id={p.USR_NAME}>{p.USR_LAST_NAME}</td><td id={p.USR_NAME}>{p.USR_EMAIL_ADDRESS}</td></tr>)}
                     </tbody>
                   </Table>
                   </div>
               ) 
             } 
           } 
          export default withRouter(Displayusers); 
