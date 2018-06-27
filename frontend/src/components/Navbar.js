import React from 'react';
import { NavLink } from 'react-router-dom';
import './Main.css';

class Navbar extends React.Component {
    render() {
             return ( 
               <div >
               
                <ul className='main-nav'>
                    <div><li><NavLink to='/Main'>Home</NavLink></li></div>
                    <div><li><NavLink to='/UserAdmin'>User Admin</NavLink></li></div>
                    <li className="dropdown">
                      <a className="dropbtn">Search</a>
                        <div className="dropdown-content">
                          <NavLink to='/ProgrammeSearch'>Programme</NavLink>
                          <NavLink to='/ProposalSearch'>Proposal</NavLink>
                          <NavLink to='/ClassicalSearch'>Classical music</NavLink>
                          <NavLink to='/ContemporarySearch'>Contemporary music</NavLink>
                      </div>
                    </li>
                    <div className="logout"><li ><NavLink to='/'>Logout</NavLink></li></div>
                </ul>
                </div>
             ); 
           } 
         } 
  export default Navbar;