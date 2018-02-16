import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

class Navbar extends React.Component {
    render() {
             return ( 
                <ul className='main-nav'>
                    <li><Link to='/Main'>Home</Link></li>
                    <li><Link to='/ProgrammeSearch'>Search</Link></li>
                    <li><Link to='/UserAdmin'>User Admin</Link></li>
                    <li className="logout"><Link to='/'>Logout</Link></li>
                </ul>
             ); 
           } 
         } 

  export default Navbar;