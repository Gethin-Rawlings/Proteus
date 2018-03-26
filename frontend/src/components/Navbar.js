import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

class Navbar extends React.Component {
    render() {
             return ( 
               <div >
                <ul className='main-nav'>
                    <div><li><Link to='/Main'>Home</Link></li></div>
                    <div><li><Link to='/ProgrammeSearch'>Search</Link></li></div>
                    <div><li><Link to='/UserAdmin'>User Admin</Link></li></div>
                    <div><li className="logout"><Link to='/'>Logout</Link></li></div>
                </ul>
                </div>
             ); 
           } 
         } 

  export default Navbar;