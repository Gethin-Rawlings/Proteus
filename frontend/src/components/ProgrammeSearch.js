import React from 'react';
import "./Main.css";
import Navbar from "./Navbar"
import Footer from './Footer'
import Displayprogrammes from "./Displayprogrammes";
import {programmeSearch} from "./apiCalls";
import Getorganisations from "./Getorganisations";
import {CSVLink} from 'react-csv';

class Programmesearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      network: '',
      production: '',
      indie: '',
      programmes: '[{"":""}]',
      history: this.history
    };
    this.handleChange = this
      .handleChange
      .bind(this);
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({[name]: value});
  }
  async handleSubmit(event) {
    event.preventDefault();
    try {
      const data = await programmeSearch(event.target)
      this.setState({
        programmes: JSON.stringify(data)
      })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div className="main">
        <Navbar/>
        <section>
          <form onSubmit={this.handleSubmit} id='form' className="programmeForm"></form>
          <section className="progSearchLayout">
            <section  className="programmeSearchText">Title </section>
            <section  >
              <input
                name="text"
                type="text"
                form="form"
                placeholder="Title"
                value={this.state.text}
                onChange={this.handleChange}/>
            </section>
            <section  className="programmeSearchText">Network </section>
            <section>
              <Getorganisations name="network" network={this.handleChange}/>
            </section>
            <section  className="programmeSearchText">Production </section>
            <section>
              <Getorganisations name="production" production={this.handleChange}/>
            </section>
            <section  className="programmeSearchText">Indie </section>
            <section  name="indies">
              <Getorganisations name="indie" indies={this.handleChange}/>
            </section>
            <section className="programmeSearchText">From </section>
            <section >
              <input type="date" className = "date" name="fromdate" id="datetime" form="form"></input>
            </section>
            <section className="programmeSearchText">To </section>
            <section>
              <input type="date" className = "date" name="todate" id="datetime" form="form"></input>
            </section>
          </section>
          <button id="submit" name = 'submit' className="submit" form="form">Search</button>
          <button id="reset" type="reset" className="reset" form="form">Reset</button>
          <button id="download" className="csv" >
           <CSVLink data={JSON.parse(this.state.programmes)}>CSV</CSVLink>
          </button>
          <Displayprogrammes
            className='results'
            name='results'
            programmes={this.state.programmes}
            history={this.history}/>
        </section>

        <Footer/>
      </div>
    );
  }
}
export default Programmesearch;