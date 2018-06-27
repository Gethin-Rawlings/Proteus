import React from 'react';
import "./login.css";
import 'whatwg-fetch';
import Footer from "./Footer";
import Welcome from "./Welcome";
import { login } from './apiCalls';

class Login extends React.Component {
    constructor(props) { 
            super(props); 
              this.state={value: '', loggedIn: 'false'};
              this.handleChange = this.handleChange.bind(this);
              this.handleSubmit = this.handleSubmit.bind(this);      
           } 
           handleChange(event) {
            const target = event.target;
            const name = target.name;
            const value = target.value;
            this.setState({[name]: value});
          }
           async handleSubmit(event) { 
            event.preventDefault(); 
            const { history } = this.props;
            const dataForm = new FormData(event.target);
            try {
              await login(dataForm)
            } catch(err) {
              console.log("Login Failed")
            } 
            const loggedIn = sessionStorage.getItem('loggedIn');
            if(loggedIn) {
              history.push("/main");
              }
           } 
           render() { 
             return ( 
              <div className="App">
                <Welcome />
                <section className="App-intro">
                <form className='content' onSubmit={this.handleSubmit} id='login'> 
                    <input  name="username" className="username" type="text"  placeholder="username" value={this.state.username} onChange={this.handleChange}/> 
                    <input  name="password" className="password" type="password"  placeholder="password" value={this.state.password} onChange={this.handleChange}/> 
                    <button id="loginbutton" className="loginbutton">Login</button> 
                 <section className="browser">Recomended browsers are Chrome, Safari or Firefox</section>
                </form> 
               </section>
               <Footer />
               </div>
             ); 
           } 
         } 

  export default Login;

 
