import React from 'react';
import logo from '../bbc_logo.png';
import './Main.css'

class Header extends React.Component {
    render() {
             return ( 
                <div>
                    <section className='main-logo'>
                        <img src={logo} className="main-logo" alt="logo" />
              </section>
                </div>
             ); 
           } 
         } 

  export default Header;