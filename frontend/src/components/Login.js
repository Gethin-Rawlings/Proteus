import React from 'react';
import "./login.css";
import logo from '../bbc_logo.png';
import 'whatwg-fetch';

const urlForLogin = users => 'http://localhost:5000/users'
 
class Login extends React.Component {
    constructor(props) { 
            super(props); 
              this.state={value: ''};
              this.handleChange = this.handleChange.bind(this);
              this.handleSubmit = this.handleSubmit.bind(this); 
           } 
           handleChange(event) {
            const target = event.target;
            const name = target.name;
            const value = target.value;
            this.setState({[name]: value});
          }
           handleSubmit(event) { 
            event.preventDefault(); 
            const { history } = this.props;
            const data = new FormData(event.target);
             fetch(urlForLogin(this.props.users), { 
               method: 'POST', 
               body: data
             }).then(response => response.json().then(data => {
                if (data.success  === false){
                  console.log("Login Failed")
                  history.push("/Main");
                };
                if (data.success === true){
                 
                  history.push("/Main");
                };
             } ))      
           } 
           render() { 
             return ( 
              <div className="App">
              <section className='App-nav'>
                <img src={logo} className="App-logo" alt="logo" />
              </section>
              <section className="App-headerside"></section>
              <header className="App-header">
                <section className="App-title">Welcome to Proteus</section>
              </header>
              <section className="App-intro">
               <form className='content' onSubmit={this.handleSubmit} id='login'> 
                    <input  name="username" className="username" type="text"  placeholder="username" value={this.state.username} onChange={this.handleChange}/> 
                    <input  name="password" className="password" type="password"  placeholder="password" value={this.state.password} onChange={this.handleChange}/> 
                    <button id="loginbutton" className="loginbutton">Login</button> 
                 <section className="browser">Recomended browsers are Chrome, Safari or Firefox</section>
               </form> 
               </section>
               <footer className="App-footer">Copyright BBC 2001-2018  |  Proteus 5</footer>
               </div>
             ); 
           } 
         } 

  export default Login;

 
