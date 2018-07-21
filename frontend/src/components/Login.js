import React from 'react';
import "./login.css";
import 'whatwg-fetch';
import Footer from "./Footer";
import Welcome from "./Welcome";
import {login} from './apiCalls';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      loggedIn: 'false',
      username:'',
      password:''
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
    const {history} = this.props;
    try {
      const data = await login(event.target)
      this.setState({loginStatus: data})
    } catch (err) {
      console.log(err)
    }
    const loginStatus = this.state.loginStatus
    if (loginStatus.success === true) {
      sessionStorage.setItem('token', loginStatus.token);
      sessionStorage.setItem('loggedIn', loginStatus.success);
      sessionStorage.setItem('supplier', loginStatus.supplier)
      sessionStorage.setItem('network', loginStatus.network)
      sessionStorage.setItem('admin', loginStatus.admin)
      sessionStorage.setItem('finance', loginStatus.finance)
      sessionStorage.setItem('commission', loginStatus.commission)
    };  
    const loggedIn = sessionStorage.getItem('loggedIn');
    if (loggedIn) {
      history.push("/main");
    }
  }
  render() {
    return (
      <div className="App">
        <Welcome/>
        <section className="App-intro">
          <form className='content' onSubmit={this.handleSubmit} id='login'>
            <input
              name="username"
              className="username"
              type="text"
              placeholder="username"
              value={this.state.username}
              onChange={this.handleChange}/>
            <input
              name="password"
              className="password"
              type="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}/>
            <button id="loginbutton" className="loginbutton">Login</button>
            <section className="browser">Recomended browsers are Chrome, Safari or Firefox</section>
          </form>
        </section>
        <Footer/>
      </div>
    );
  }
}
export default Login;