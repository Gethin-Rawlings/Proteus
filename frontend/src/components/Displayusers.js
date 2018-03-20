import React, { Component } from 'react';
import './displayusers.css'

class Displayusers extends Component {       
  constructor(props) { 
    super(props); 
      this.state={user:'[{"usr_name":""}]'};
      this.handleClick = this.handleClick.bind(this); 
   } 
   handleClick(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({[name]: value});
    console.log(event)
    console.log(target)
    console.log(name)
    console.log(value)
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
                      
                            {returnData.map(p => <tr><td onClick={this.handleClick}>{p.USR_NAME}</td><td>{p.USR_FIRST_NAME}</td><td>{p.USR_LAST_NAME}</td><td>{p.USR_EMAIL_ADDRESS}</td></tr>)}
                     </table>

               ) 
             } 
           } 
          export default Displayusers; 
