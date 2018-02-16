import React from 'react';
import "./Main.css";
import Navbar from "./Navbar"
import Header from './Header'
import Footer from './Footer'

class UserAdmin extends React.Component {
    render() {
             return ( 
              <div className="main">
                <Header />
                <Navbar />
                <section className="main-body">User stuff goes here</section>
                <Footer />
              </div>
              
             ); 
           } 
         } 

  export default UserAdmin;