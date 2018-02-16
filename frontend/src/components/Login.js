import React from 'react';
import "./login.css";
import 'whatwg-fetch';
import Header from "./Header"
import Footer from "./Footer"
import Welcome from "./Welcome"

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
                  history.push("/main");
                };
                if (data.success === true){
                  history.push("/main");
                };
             } ))      
           } 
           render() { 
             return ( 
              <div className="App">
                <Header />
                <section className="App-headerside"></section>
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

 
