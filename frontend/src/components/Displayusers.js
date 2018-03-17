import React, { Component } from 'react';
import './displayusers.css'
class Displayusers extends Component {       
    
             render() {  
                
                let returnData = JSON.parse(this.props.users)

                return (
                     <table className='displayusers'>
                         <th>User Name</th>
                         <th>First Name</th>
                         <th>Last Name</th>
                         <th>Email Adress</th>
                            {returnData.map(p => <tr><th>{p.USR_NAME}</th><th>{p.USR_FIRST_NAME}</th><th>{p.USR_LAST_NAME}</th><th>{p.USR_EMAIL_ADDRESS}</th></tr>)}
                     </table>
               ) 
             } 
           } 
           
          export default Displayusers; 
