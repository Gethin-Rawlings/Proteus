import React from 'react';
import "./form.css";

const urlForLogin = users => 'http://localhost:5000/users'

class Form extends React.Component {
    constructor() { 
            super(); 
             this.handleSubmit = this.handleSubmit.bind(this); 
           } 
           handleSubmit(event) { 
             event.preventDefault(); 
             const data = new FormData(event.target[0].value); 
             console.log(data);
             fetch(urlForLogin(this.props.users), { 
               method: 'POST', 
               body: data, 
             }).then(reponse => {
                if (reponse === false){
                  alert("Login Failed")
                }
                if (reponse === true){
                  window.location.href = "http://stackoverflow.com";
                }
             } )        
           } 
         
           render() { 
             return ( 
               <form className='content' onSubmit={this.handleSubmit}> 
                    
                    <input id="username" className="username" type="text"  placeholder="username" /> 
                    
                    <input id="password" className="password" type="password"  placeholder="password"/> 
                    
                    <button id="loginbutton" className="loginbutton">Login</button> 
                 <section className="browser"> Recomended browsers are Chrome, Safari or Firefox</section>
               </form> 
             ); 
           } 
         } 

  export default Form;

 
