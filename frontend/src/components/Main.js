import React from 'react';
import "./Main.css";
import Navbar from "./Navbar"
import Footer from './Footer'



class Main extends React.Component {

  componentDidMount(){
    const loggedIn = sessionStorage.getItem('loggedIn');
    console.log(loggedIn)
    const { history } = this.props;
      if(!loggedIn) {
        history.push("/");
        }
      } 
   

    render() {
             return ( 
              <div className="main">
                <Navbar />
                <section className="main-body">Grumpy cat was ere again </section>
                <Footer />
              </div>
              
             ); 
           } 
         } 

  export default Main;

 
