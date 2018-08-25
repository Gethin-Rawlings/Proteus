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
    const reports = sessionStorage.getItem('reports')
    var proposal = 'false'
    if (supplier === 'true' || commission === 'true' ) {
       proposal = 'true'
    } 
    return (
      <div >
        <Security history={this.props.route}/>
        <ul className='main-nav'>
          <div className = 'navbar'>
            <li>
              <NavLink className='navText' to='/Main'>Home</NavLink>
            </li>
          </div>
          {admin === 'true' &&
          <div className = 'navbar'>
            <li>
              <NavLink className='navText' to='/UserAdmin'>User Admin</NavLink>
            </li>
          </div>
          }
          {reports === 'true' &&
          <div className = 'navbar'>
            <li>
              <NavLink className='navText' to='/Reports' >Reports</NavLink>
            </li>
          </div>
          }
          <li className="dropdown">
            <a className="dropbtn navText">Search</a>
            <div className="dropdown-content">
              <NavLink to='/ProgrammeSearch'>Programme</NavLink>
              {proposal === 'true' && <NavLink className='navText' to='/ProposalSearch'>Proposal</NavLink>}
              {classical ==='true'&& <NavLink className='navText' to='/ClassicalSearch'>Classical music</NavLink>}
              <NavLink className='navText' to='/ContemporarySearch'>Contemporary music</NavLink>
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
