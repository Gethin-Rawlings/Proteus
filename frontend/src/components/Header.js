import React from 'react';
import './Main.css';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class Header extends React.Component {
    render() {
             return ( 
              <div>
                <Navbar fixedTop fluid inverse>
                  <Nav>
                    <NavItem eventKey={1} href="/Main">
                      Home
                    </NavItem>
                    <NavItem eventKey={2} href="/Useradmin">
                      User admin
                    </NavItem>
                    <NavDropdown eventKey={3} title="Search" id="basic-nav-dropdown">
                      <MenuItem eventKey={3.1} href="/Programmesearch">Programme search</MenuItem>
                      <MenuItem eventKey={3.2} href="/Proposalsearch">Proposal search</MenuItem>
                      <MenuItem divider />
                      <MenuItem eventKey={3.3} href="/Classicalsearch">Classical music search</MenuItem>
                      <MenuItem eventKey={3.4} href="/Contemporarysearch">Contemporary music search</MenuItem>
                    </NavDropdown>
                  </Nav>
                  <Nav pullRight>
                    <NavItem eventKey={4} href="/">
                      Logout
                    </NavItem>
                  </Nav>
                </Navbar>
            </div>
             ); 
           } 
         } 
  export default Header;