import React from 'react';
import "./Main.css";
import Navbar from "./Navbar"
import Footer from './Footer'
import Getnetworks from "./Getnetworks";
import GetProductionDepts from "./GetProductionDepts";
import GetIndies from "./GetIndies";
import Displayprogrammes from "./Displayprogrammes";
import {programmeSearch} from "./apiCalls";

class Programmesearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      network: '',
      production: '',
      indie: '',
      programmes: '[{"usr_name":"Waiting"}]',
      history: this.history
    };
    this.handleChange = this
      .handleChange
      .bind(this);
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
  }
  componentDidMount() {
    const loggedIn = sessionStorage.getItem('loggedIn');
    const {history} = this.props;
    if (!loggedIn) {
      history.push("/");
    }
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
          <section className='programmeSearch'>
            <section>
              <input
                name="username"
                className="usersearch"
                type="text"
                form="form"
                placeholder="Title"
                value={this.state.username}
                onChange={this.handleChange}/>
            </section>
            <section className='networks'>
              <Getnetworks name="network" network={this.handleChange}/>
            </section>
            <section className='productions' name='productions'>
              <GetProductionDepts
                name="production"
                className="production"
                production={this.handleChange}/>
            </section>
            <section className='indies' name="indies">
              <GetIndies name="indie" indies={this.handleChange}/>
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