import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

class Navbar extends React.Component {
    render() {
             return ( 
               <div >
                <ul className='main-nav'>
                    <div><li><Link to='/Main'>Home</Link></li></div>
                    <div><li><Link to='/UserAdmin'>User Admin</Link></li></div>
                    <li class="dropdown">
                      <a href="javascript:void(0)" className="dropbtn">Search</a>
                        <div className="dropdown-content">
                          <Link to='/ProgrammeSearch'>Programme</Link>
                          <Link to='/ProposalSearch'>Proposal</Link>
                          <Link to='/ClassicalSearch'>Classical music</Link>
                          <Link to='/ContemporarySearch'>Contemporary music</Link>
                      </div>
                    </li>
                    <div className="logout"><li ><Link to='/'>Logout</Link></li></div>
                </ul>
                </div>
             ); 
           } 
         } 

  export default Navbar;