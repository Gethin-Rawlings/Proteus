import React from 'react';
import "./Main.css";
import Navbar from "./Navbar"
import Footer from './Footer'

class Reports extends React.Component {
  
  render() {
    return (
      <div className="main">
        <Navbar/>
        <section className="pad">
        <section className="main-body">Reports will go here
        </section>
        </section>
        <Footer/>
      </div>

    );
  }
}
export default Reports;
