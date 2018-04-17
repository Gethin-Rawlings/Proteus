import React, { Component } from 'react';
import './displayusers.css'
import {withRouter} from "react-router-dom"

class Displayprogrammes extends Component {       
  constructor(props) { 
    super(props); 
      this.state={user:'[{"programmeNumber":""}]', history:this.props.history};
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
                         <th>Programme Number</th>
                         <th>sequence</th>
                         <th>Supplier</th>
                         <th>Network</th>
                         <th>Programme Title</th>
                         <th>Duration</th>
                         <th>scheduledTime</th>
                      </tr>
                            {returnData.map(p => <tr onClick={this.handleClick}>
                                                    <td id={p.programmeNumber} >{p.programmeNumber}</td >
                                                    <td id={p.programmeNumber}>{p.sequence}</td>
                                                    <td id={p.programmeNumber}>{p.Supplier}</td>
                                                    <td id={p.programmeNumber}>{p.Network}</td>
                                                    <td id={p.programmeNumber}>{p.ProgrammeTitle}</td>
                                                    <td id={p.programmeNumber}>{p.duration}</td>
                                                    <td id={p.programmeNumber}>{p.scheduledTime}</td>
                                                </tr>)}
                     </table>
               ) 
             } 
           } 
          export default withRouter(Displayprogrammes); 