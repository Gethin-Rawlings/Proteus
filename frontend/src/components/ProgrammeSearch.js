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
        <section className="App-intro">
          <form onSubmit={this.handleSubmit} id='form' className="programmeForm"></form>
          <section className="pad">
          <section className='programmeSearch'>
            <section>
              <input
                name="text"
                className="usersearch"
                type="text"
                form="form"
                placeholder="Title"
                value={this.state.text}
                onChange={this.handleChange}/>
            </section>
            <section className='networks'>
              <Getorganisations name="network" network={this.handleChange}/>
            </section>
            <section className='productions' name='productions'>
              <Getorganisations name="production" production={this.handleChange}/>
            </section>
            <section className='indies' name="indies">
              <Getorganisations name="indie" indies={this.handleChange}/>
            </section>
          </section>
          <br/>
          <section className="datePicker">
            <section>From</section>
            <section className="from">
              <input type="date" name="fromdate" id="datetime" form="form"></input>
            </section>
            <section>To</section>
            <section className="to">
              <input type="date" name="todate" id="datetime" form="form"></input>
            </section>
          </section>
          <button id="submit" name = 'submit' className="submit" form="form">Search</button>
          <button id="reset" type="reset" className="reset" form="form">Reset</button>
          <button id="download" className="csv">CSV
           <CSVLink data={JSON.parse(this.state.programmes)}></CSVLink>
          </button>
          <Displayprogrammes
            className='results'
            name='results'
            programmes={this.state.programmes}
            history={this.history}/>
        </section>
        </section>
        <Footer/>
      </div>
    );
  }
}
export default Programmesearch;