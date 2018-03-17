import React from 'react';
import "./Main.css";
import Navbar from "./Navbar";
import Header from './Header';
import Footer from './Footer';
import Getnetworks from "./Getnetworks";
import GetProductionDepts from "./GetProductionDepts";
import GetIndies from "./GetIndies";
import Displayusers from "./Displayusers";
import "./userAdmin.css";

const urlForUserAdmin = users => 'http://172.18.0.2:5000/userAdmin'

class UserAdmin extends React.Component {
  constructor(props) { 
    super(props); 
      this.state={network: '', production:'', indie:'',users:'[{"usr_name":"Waiting"}]'};
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
     fetch(urlForUserAdmin(this.props.users), { 
       method: 'POST', 
       body: data
     }).then(response => response.json().then(data => { 
      this.setState({ 
         users: JSON.stringify(data)
      }) 
    } ))      
   } 
    render() {
             return ( 
              <div className="main">
                <Header />
                <Navbar />
                <section className="App-intro">
                <form className='useradmin' onSubmit={this.handleSubmit}>
                  <section className="form">
                    
                      <section className='networks'>  
                      <label for="network">Networks   </label>            
                      
                      <Getnetworks  name="network" network={this.handleChange}/>
                      </section>
                      <section className='productions' name='productions'>
                      <label for="Production">Production</label> 
                      
                      <GetProductionDepts name="production" production={this.handleChange}/>
                      </section>
                      <section className='indies' name="indies">
                      <label for="Indie">Indies</label> 
                      
                      <GetIndies name="indie" indies={this.handleChange}/>   
                      </section>                 
                  </section>
                  <button id="submit" className="submit">Search</button> 
                  <Displayusers className='results' name='results'users={this.state.users}/>
                </form>
                
                </section>
                <Footer />
              </div>
              
             ); 
           } 
         } 

  export default UserAdmin;