import React from 'react';
import "./Main.css";
import Navbar from "./Navbar"
import Header from './Header'
import Footer from './Footer'

const loggedIn = sessionStorage.getItem('loggedIn');

class Main extends React.Component {

  componentDidMount(){
    
    const { history } = this.props;
      if(!loggedIn) {
        history.push("/");
        }
      } 
   

    render() {
             return ( 
              <div className="main">
                <Header />
                <Navbar />
                <section className="main-body">Grumpy cat was ere {loggedIn} wibble </section>
                <Footer />
              </div>
              
             ); 
           } 
         } 

  export default Main;

 
