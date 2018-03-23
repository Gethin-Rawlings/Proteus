import React from 'react';
import "./Main.css";
import Header from './Header'
import Footer from './Footer'
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class Main extends React.Component {
  componentDidMount(){
    const loggedIn = sessionStorage.getItem('loggedIn');
    console.log(loggedIn)
    const { history } = this.props;
      if(!loggedIn) {
        history.push("/");
        }
      } 
    render() {
             return ( 
              <div className="main">
                <Header />
                <section className="main-body">Grumpy cat was ere again </section>
                <Footer />
              </div>
              
             ); 
           } 
         } 
  export default Main;

 
