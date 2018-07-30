import React from 'react';
import {NavLink} from 'react-router-dom';
import './Main.css';
import Security from './Security';
import {withRouter} from "react-router-dom"

class Navbar extends React.Component {
  render() {

    const admin = sessionStorage.getItem('admin');
    const classical = sessionStorage.getItem('classical')
    const supplier = sessionStorage.getItem('supplier')
    const commission = sessionStorage.getItem('commission')
    var proposal = 'false'
    if (supplier === 'true' || commission === 'true' ) {
       proposal = 'true'
    } 
    return (
      <div >
        <Security history={this.props.route}/>
        <ul className='main-nav'>
          <div>
            <li>
              <NavLink to='/Main'>Home</NavLink>
            </li>
          </div>
          {admin === 'true' &&
          <div>
            <li>
              <NavLink to='/UserAdmin'>User Admin</NavLink>
            </li>
          </div>
          }
          <li className="dropdown">
            <a className="dropbtn">Search</a>
            <div className="dropdown-content">
              <NavLink to='/ProgrammeSearch'>Programme</NavLink>
              {proposal === 'true' && <NavLink to='/ProposalSearch'>Proposal</NavLink>}
              {classical ==='true'&& <NavLink to='/ClassicalSearch'>Classical music</NavLink>}
              <NavLink to='/ContemporarySearch'>Contemporary music</NavLink>
            </div>
          </li>
          <div className="logout">
            <li >
              <NavLink to='/Logout'>Logout</NavLink>
            </li>
          </div>
        </ul>
      </div>
    );
  }
}
export default withRouter(Navbar);
