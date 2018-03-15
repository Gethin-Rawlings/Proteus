import React, { Component } from 'react';


const urlForNetworks  = proddepts => 'http://172.18.0.2:5000/organisations?type=production'

class GetProductionDepts extends Component {       
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

  componentDidMount() { 
        fetch(urlForNetworks(this.props.proddepts)) 
        .then(response => { 
            if (!response.ok) { 
                throw Error("Network request failed") 
            } 
                 return response 
               }) 
               .then(d => d.json()) 
               
               .then(d => { 
                 this.setState({ 
                    Getproddepts: JSON.stringify(d)
                 }) 
               }, () => { 
                 this.setState({ 
                   requestFailed: true 
                 }) 
               }) 
           } 
           render() {    
             if (this.state.requestFailed) return <p>Failed!</p> 
             if (!this.state.Getproddepts) return <p>Loading...</p> 
             let returnData = JSON.parse(this.state.Getproddepts)
             return (
                   <select name = "proddepts" onChange={this.handleChange}>
                    <option disabled selected value> -- select an Production deptartment -- </option>
                     {returnData.map(p => <option value={p.org_organisation_id} >{p.org_description}</option>)}
                   </select>
             ) 
           } 
         } 
         
        export default GetProductionDepts; 
        