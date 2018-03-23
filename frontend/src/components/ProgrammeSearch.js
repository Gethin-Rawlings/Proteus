import React from 'react';
import "./Main.css";
import Navbar from "./Navbar"
import Header from './Header'
import Footer from './Footer'
import Getnetworks from "./Getnetworks";
import GetProductionDepts from "./GetProductionDepts";
import GetIndies from "./GetIndies";
import Displayprogrammes from "./Displayprogrammes";

const urlForprogrammeSearch = users => 'http://ec2-52-56-248-133.eu-west-2.compute.amazonaws.com:5000/programmesearch'

class Programmesearch extends React.Component {
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
     fetch(urlForprogrammeSearch(this.props.users), { 
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
                  <section className='programmeSearch'>
                    <form  onSubmit={this.handleSubmit} id='form'>
                    </form>
                    <input className="from" type="date" name="fromdate" id="datetime" form ="form"></input>
                    <input className="to" type="date" name="todate" id="datetime" form ="form"></input>
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
                    <input  name="username" className="usersearch" type="text" form="form" placeholder="Title" value={this.state.username} onChange={this.handleChange}/>
                    <Displayprogrammes className='results' name='results'users={this.state.users} history={this.history}/>
                  </section>
                </section>
                <Footer />
              </div>              
             ); 
           } 
         } 

  export default Programmesearch;