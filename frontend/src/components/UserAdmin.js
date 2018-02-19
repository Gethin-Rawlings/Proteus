import React from 'react';
import "./Main.css";
import Navbar from "./Navbar"
import Header from './Header'
import Footer from './Footer'
import Getnetworks from "./Getnetworks"

      const networks = "networks";
      const prod = "production";
      const indie = "indie" ;

class UserAdmin extends React.Component {
    constructor(props){
      super(props)
      
    }
    render() {
             return ( 
              <div className="main">
                <Header />
                <Navbar />
                <form>
                  <fieldset>
                    <legend>User Admin</legend>
                    <p>
                      <label>Network</label>
                      <Getnetworks type={networks}/>
                    </p>
                    <p>
                      <label>Production</label>
                      <Getnetworks type={prod}/>
                    </p>
                    <p>
                      <label>Indies</label>
                      <Getnetworks type={indie}/>
                    </p>
                  </fieldset>
                </form>
                <Footer />
              </div>
              
             ); 
           } 
         } 

  export default UserAdmin;