import React from 'react';
import "./Main.css";
import Navbar from "./Navbar";
import Header from './Header';
import Footer from './Footer';
import Getnetworks from "./Getnetworks";
import GetProductionDepts from "./GetProductionDepts";
import GetIndies from "./GetIndies";

const urlForUserAdmin = users => 'http://172.18.0.2:5000/userAdmin'

class UserAdmin extends React.Component {
  constructor(props) { 
    super(props); 
      this.state={network: '', proddepts:'', indies:''};
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
    console.log(data)
     fetch(urlForUserAdmin(this.props.users), { 
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
              <div className="main">
                <Header />
                <Navbar />
                <form onSubmit={this.handleSubmit} id='userAdmin'>
                  <fieldset>
                    <legend>User Admin</legend>                  
                      Network
                      <Getnetworks name ="network" network={this.handleChange}/>
                      Production
                      <GetProductionDepts name="proddepts" proddepts={this.handleChange}/>
                      Indies
                      <GetIndies name="Indies" indies={this.handleChange}/>                    
                  </fieldset>
                  <button id="submit" className="submit">Search</button> 
                </form>
                <Footer />
              </div>
              
             ); 
           } 
         } 

  export default UserAdmin;