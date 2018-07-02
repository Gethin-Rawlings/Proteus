import React from 'react';
import "./Main.css";
import Navbar from "./Navbar";
import Footer from './Footer';
import Getnetworks from "./Getnetworks";
import GetProductionDepts from "./GetProductionDepts";
import GetIndies from "./GetIndies";
import Displayusers from "./Displayusers";
import "./userAdmin.css";
import { userSearch } from "./apiCalls"

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
  async handleSubmit(event) { 
    event.preventDefault(); 
    try {
      console.log(event.target)
      const data = await userSearch(event.target)
      this.setState({users: JSON.stringify(data)})
    } catch(err) {
      console.log(err)
    }       
   } 
    render() {
             return ( 
              <div className="main">
                <Navbar />
                <div className="App-intro">
                  <form  onSubmit={this.handleSubmit} id='form'>
                  </form>
                    <section className='useradmin'>
                      <section>
                        <input  name="username" className="usersearch" type="text" form="form" placeholder="username" value={this.state.username} onChange={this.handleChange}/>
                      </section> 
                      <section className='network'>                 
                        <Getnetworks  name="network" network={this.handleChange}/>
                      </section>
                      <section className='production' name='productions'>   
                        <GetProductionDepts name="production" className="production" production={this.handleChange}/>
                      </section>
                      <section className='indie' name="indies">
                        <GetIndies name="indie" indies={this.handleChange}/>  
                      </section>
                    </section>
                    <br />
                    <button id="submit" className="submit" form ="form">Search</button>
                    <button id="reset" className ="reset" type="reset" form="form">Reset</button>
                    <div>
                      <Displayusers className='results' name='results' users={this.state.users} history={this.history}/>
                    </div>
                </div>
                <Footer />
              </div>             
             ); 
           } 
         } 

  export default UserAdmin;