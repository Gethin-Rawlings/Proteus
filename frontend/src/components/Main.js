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
        <section className="main-body">Grumpy cat was ere again
        <Brands />
        </section>
        <Footer/>
      </div>

    );
  }
}
export default Main;
