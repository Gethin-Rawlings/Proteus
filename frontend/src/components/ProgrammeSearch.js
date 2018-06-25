import React from 'react';
import "./Main.css";
import Navbar from "./Navbar"
import Footer from './Footer'
import Getnetworks from "./Getnetworks";
import GetProductionDepts from "./GetProductionDepts";
import GetIndies from "./GetIndies";
import Displayprogrammes from "./Displayprogrammes";


const urlForprogrammeSearch =  'http://ec2-52-56-248-133.eu-west-2.compute.amazonaws.com:5000/programmesearch'

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
        //history.push("/");
        console.log("wibble")
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

                <Navbar />
                <section className="App-intro">
                  
                    <form  onSubmit={this.handleSubmit} id='form'>
                    </form>
                    <section className='programmeSearch'>
                      <section>
                        <input  name="username" className="usersearch" type="text" form="form" placeholder="Title" value={this.state.username} onChange={this.handleChange}/>
                      </section>
                      <section className='networks'>                 
                        <Getnetworks  name="network" network={this.handleChange}/>
                      </section>
                      <section className='productions' name='productions'>   
                        <GetProductionDepts name="production" className="production" production={this.handleChange}/>
                      </section>
                      <section className='indies' name="indies">
                        <GetIndies name="indie" indies={this.handleChange}/>  
                      </section>
                      
                    </section>
                    <br />
                    <section className="datePicker">
                      <section>From</section>
                      <section className="from" >
                        <input type="date" name="fromdate" id="datetime" form ="form"></input>
                      </section>
                      <section>To</section>
                      <section className="to" >
                        <input type="date" name="todate" id="datetime" form ="form"></input>
                    </section>
                    </section>
                    <button id="submit" className="submit" form ="form">Search</button>
                    <button id="reset" type="reset" className="reset" form="form">Reset</button>
                    <Displayprogrammes className='results' name='results'users={this.state.users} history={this.history}/>
                  
                </section>
                <Footer />
              </div>              
             ); 
           } 
         } 

  export default Programmesearch;