import React, { Component } from 'react';
import './displayusers.css'
import {withRouter} from "react-router-dom"

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
                     <table className='displayusers'>
                      <tr>
                         <th>User Name</th>
                         <th>First Name</th>
                         <th>Last Name</th>
                         <th>Email Adress</th>
                      </tr>
                            {returnData.map(p => <tr onClick={this.handleClick}><td id={p.USR_NAME} >{p.USR_NAME}</td ><td id={p.USR_NAME}>{p.USR_FIRST_NAME}</td><td id={p.USR_NAME}>{p.USR_LAST_NAME}</td><td id={p.USR_NAME}>{p.USR_EMAIL_ADDRESS}</td></tr>)}
                     </table>
               ) 
             } 
           } 
          export default withRouter(Displayusers); 
