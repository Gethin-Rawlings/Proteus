import React from 'react';
import "./Main.css";
import Navbar from "./Navbar"
import Header from './Header'
import Footer from './Footer'

class Main extends React.Component {
    render() {
             return ( 
              <div className="main">
                <Header />
                <Navbar />
                <section className="main-body">Grumpy cat was ere</section>
                <Footer />
              </div>
              
             ); 
           } 
         } 

  export default Main;

 
