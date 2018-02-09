import React from 'react';
import "./Login.css";
import decode from 'jwt-decode';

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
            const data = new FormData(event.target);
             fetch(urlForLogin(this.props.users), { 
               method: 'POST', 
               body: data
             }).then(response => response.json().then(data => {
                if (data.sucess  === false){
                  console.log("Login Failed")
                }
                if (data.sucess === true){
                  console.log(data.token)
                }
             } ))      
           } 
           render() { 
             return ( 
               <form className='content' onSubmit={this.handleSubmit} id='login'> 
                    <input  name="username" className="username" type="text"  placeholder="username" value={this.state.username} onChange={this.handleChange}/> 
                    <input  name="password" className="password" type="password"  placeholder="password" value={this.state.password} onChange={this.handleChange}/> 
                    <button id="loginbutton" className="loginbutton">Login</button> 
                 <section className="browser"> Recomended browsers are Chrome, Safari or Firefox</section>
               </form> 
             ); 
           } 
         } 

  export default Login;

 