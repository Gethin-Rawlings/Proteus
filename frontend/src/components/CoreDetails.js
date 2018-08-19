import React from 'react';
//import "./details.css";
import "./Main.css"


class CoreDetails extends React.Component {
  
  render() {
    
    return (
      <div  onChange={this.handleChange} >
        <section className='details'>
            Something to go here for core details
        </section>
      </div>
    );
  }
}
export default CoreDetails;