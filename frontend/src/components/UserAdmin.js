import React from 'react';
import "./Main.css";
import Navbar from "./Navbar"
import Header from './Header'
import Footer from './Footer'
import Getnetworks from "./Getnetworks"
import GetProductionDepts from "./GetProductionDepts"
import GetIndies from "./GetIndies"
import GetOpenRounds from "./GetOpenRounds"

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
                      <Getnetworks />
                    </p>
                    <p>
                      <label>Production</label>
                      <GetProductionDepts/>
                    </p>
                    <p>
                      <label>Indies</label>
                      <GetIndies />
                    </p>
                    <p> 
                      <label>Open Rounds</label>
                      <GetOpenRounds />
                    </p>
                  </fieldset>
                </form>
                <Footer />
              </div>
              
             ); 
           } 
         } 

  export default UserAdmin;