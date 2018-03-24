import React from 'react';
import "./Main.css";
import Header from './Header';
import Footer from './Footer';
import {Button, ButtonToolbar} from 'react-bootstrap';


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
                <section className="main-body">
                  Grumpy cat was ere
                  <ButtonToolbar>
  {/* Standard button */}
  <Button>Default</Button>

  {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
  <Button bsStyle="primary">Primary</Button>

  {/* Indicates a successful or positive action */}
  <Button bsStyle="success">Success</Button>

  {/* Contextual button for informational alert messages */}
  <Button bsStyle="info">Info</Button>

  {/* Indicates caution should be taken with this action */}
  <Button bsStyle="warning">Warning</Button>

  {/* Indicates a dangerous or potentially negative action */}
  <Button bsStyle="danger">Danger</Button>

  {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
  <Button bsStyle="link">Link</Button>
</ButtonToolbar>;
                </section>
                <Footer />
              </div>
              
             ); 
           } 
         } 
  export default Main;

 
