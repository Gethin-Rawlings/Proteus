import React from 'react';
import "./Main.css";
import Navbar from "./Navbar";
import Header from './Header';
import Footer from './Footer';

class UserDetails extends React.Component {
  constructor(props) { 
    super(props); 

   } 
   componentDidMount(){
    const loggedIn = sessionStorage.getItem('loggedIn');
    const user =this.props.location.state.detail
    const urlForuserDetails = users => 'http://172.18.0.2:5000/userDetails?user='+user
    console.log (urlForuserDetails)
    const { history } = this.props;
      if(!loggedIn) {
        history.push("/");
        }
        fetch(urlForuserDetails(this.props.users)) 
        .then(response => { 
            if (!response.ok) { 
                throw Error("Network request failed") 
            } 
                 return response 
               }) 
               .then(d => d.json()) 
               
               .then(d => { 
                 this.setState({ 
                    userDetails: JSON.stringify(d)
                 }) 
               }, () => { 
                 this.setState({ 
                   requestFailed: true 
                 }) 
               })
      } 
    render() {
        return ( 
            <div className="main">
              <Header />
              <Navbar />
              <section className="App-intro">

              </section>
              <Footer />
            </div>              
           ); 
         } 
       } 

  export default UserDetails;