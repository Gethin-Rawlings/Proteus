import React from 'react';
import './Main.css'
import { Navbar} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class Footer extends React.Component {
    render() {
             return ( 
                
                 <Navbar fixedBottom fluid inverse className="main-footer">
                    <br />
                     <footer>Copyright GPR Consulting Ltd 2018  |  Proteus 5</footer>
                     </Navbar>    
             ); 
           } 
         } 

  export default Footer;