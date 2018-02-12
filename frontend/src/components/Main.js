import React from 'react';
import "./Main.css";



class Main extends React.Component {
    render() {
             return ( 

              <div className = 'main'>
              <ul className='main-nav'>
                <li>Home</li>
                <li>Programme Search</li>
                <li>User Admin</li>
                <li className="logout">Logout</li>
              </ul>
              <h1> Grumpy cat was ere</h1>
              </div>
             ); 
           } 
         } 

  export default Main;

 
