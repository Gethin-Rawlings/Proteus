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
   componentDidMount(){
    const loggedIn = sessionStorage.getItem('loggedIn');
    const { history } = this.props;
      if(!loggedIn) {
        history.push("/");
        }
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
                  <section className='useradmin'>
                    <form  onSubmit={this.handleSubmit} id='form'>
                    </form>
                    <button id="submit" className="submit" form ="form">Search</button>
                    <button id="reset" type="reset" className="reset" form="form">Reset</button>
                    <section className='networks'>                 
                      <Getnetworks  name="network" network={this.handleChange}/>
                    </section>
                    <section className='productions' name='productions'>   
                      <GetProductionDepts name="production" className="production" production={this.handleChange}/>
                    </section>
                    <section className='indies' name="indies">
                      <GetIndies name="indie" indies={this.handleChange}/>  
                    </section>
                    <input  name="username" className="usersearch" type="text" form="form" placeholder="username" value={this.state.username} onChange={this.handleChange}/>
                    <Displayusers className='results' name='results'users={this.state.users}/>
                  </section>
                </section>
                <Footer />
              </div>
              
             ); 
           } 
         } 

  export default UserAdmin;