import React from 'react';
import "./Main.css";
import { Link } from 'react-router-dom'
import logo from '../bbc_logo.png';


class Main extends React.Component {
    render() {
             return ( 

              <div className = 'main'>
              <ul className='main-nav'>
                <li><img src={logo} className="main-logo" alt="logo" /></li>
                <li><Link to='/Main'>Home</Link></li>
                <li><Link to='/ProgrammeSearch'>Search</Link></li>
                <li><Link to='/UserAdmin'>User Admin</Link></li>
                <li className="logout"><Link to='/'>Logout</Link></li>
              </ul>
                <section className="main-body">Grumpy cat was ere</section>
                <footer className="App-footer">Copyright BBC 2001-2018  |  Proteus 5</footer>
              </div>
              
             ); 
           } 
         } 

  export default Main;

 
