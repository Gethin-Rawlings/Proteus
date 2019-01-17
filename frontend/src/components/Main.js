import React from 'react';
import "./Main.css";
import Navbar from "./Navbar";
import Footer from './Footer';
import Brands from "./Brands";

class Main extends React.Component {
  
  render() {
    return (
      <div className="main">
        <Navbar/>
        <section className="App-intro">
        <section className="pad">
          <section> 
            Welcome to the new version of Proteus.
          </section>
          <section>
          Please ensure you always access Proteus with one of the recommended browsers:  
            Firefox, Microsoft Edge, Safari or Google Chrome.
          </section>
        </section>
        </section>
        <Footer/>
      </div>
    )
  }
}
export default Main;
