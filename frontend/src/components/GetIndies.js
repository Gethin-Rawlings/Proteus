import React, { Component } from 'react';
import { getIndie }  from './apiCalls';

class Getindie extends Component {
  constructor(props){
    super(props) 
      this.state = {
          requestFailed: false,
          value: ''
      }
      this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({[name]: value});
  }
  async componentDidMount() {
    try {
      const data = await getIndie()
      this.setState({Getindie: data})
    } catch(err) {
      this.setState({requestFailed: true})
    }
  }
           render() { 
             if (this.state.requestFailed) return <p>Failed!</p> 
             if (!this.state.Getindie) return <p>Loading...</p> 
             let returnData = this.state.Getindie
             if (returnData.length === 0 ) return <select name = "indie"><option>No open rounds</option></select>
             return (
                   <select className='indies' name = "indie" form="form"  onChange={this.handleChange}>
                    <option selected value={0}> -- select a Indie -- </option>
                      {returnData.map(p => <option value={p.org_organisation_id}>{p.org_description}</option>)}
                   </select>
             ) 
           } 
         } 
         
        export default Getindie; 
        