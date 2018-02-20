import React, { Component } from 'react';


const urlForNetworks  = network => 'http://localhost:5000/organisations?type=production'

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
}    componentDidMount() { 
        fetch(urlForNetworks(this.props.network)) 
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

            console.log(this.props)
             if (this.state.requestFailed) return <p>Failed!</p> 
             if (!this.state.Getproddepts) return <p>Loading...</p> 
             let returnData = JSON.parse(this.state.Getproddepts)
             if (returnData.length === 0 ) return <select id = "proddepts"><option>No open rounds</option></select>
             return (
                   <select id = "proddepts">
                     {returnData.map(p => <option name = "proddepts" value={p.org_organisation_id} onChange={this.handleChange}>{p.org_description}</option>)}
                   </select>
             ) 
           } 
         } 
         
        export default GetProductionDepts; 
        