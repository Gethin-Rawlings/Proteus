import React from 'react';
import "./Main.css";
import Navbar from "./Navbar";
import Footer from './Footer';
import "./userDetails.css";
import { updateUsers   } from './apiCalls';
import Brands from "./Brands";

class ProgrammeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      requestFailed: false,
      value: ''
    }
  }
  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  }
  async handleSubmit(event) {
    event.preventDefault();
    if (window.confirm("Save?")) { 
      const dataForm = new FormData(event.target);
      try {
        await updateUsers(dataForm)
      
      } catch (err) {
        console.log(err)
      }
      alert('Changes Saved')
    }
  }

  render() {
    return (
      <div className="main">
        <Navbar />
        <section className="App-intro">
          
        <Brands />
        </section>
        <Footer />
      </div>
    );
  }
}

export default ProgrammeDetails;