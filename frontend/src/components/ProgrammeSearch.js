import React from 'react';
import "./Main.css";
import Navbar from "./Navbar"
import Header from './Header'
import Footer from './Footer'


class ProgrammeSearch extends React.Component {
    render() {
             return ( 
              <div className="main">
                <Header />
                <Navbar />
                <section className="main-body">Search screen here</section>
                <Footer />
              </div>
              
             ); 
           } 
         } 

  export default ProgrammeSearch;