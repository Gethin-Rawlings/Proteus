import React from 'react';
import "./Main.css";
import { Link } from 'react-router-dom'



class UserAdmin extends React.Component {
    render() {
             return ( 

              <div className = 'main'>
              <ul className='main-nav'>
                <li><Link to='/Main'>Home</Link></li>
                <li><Link to='/ProgrammeSearch'>Programme Search</Link></li>
                <li><Link to='/UserAdmin'>User Admin</Link></li>
                <li className="logout"><Link to='/'>Logout</Link></li>
              </ul>
              <h1> So manage users time</h1>
              </div>
             ); 
           } 
         } 

  export default UserAdmin;
