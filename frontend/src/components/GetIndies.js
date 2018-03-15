import React, { Component } from 'react';


const urlForNetworks  = Indies => 'http://172.18.0.2:5000/organisations?type=indie'

class GetIndies extends Component {
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
        fetch(urlForNetworks(this.props.Indies)) 
        .then(response => { 
            if (!response.ok) { 
                throw Error("Network request failed") 
            } 
                 return response 
               }) 
               .then(d => d.json()) 
               
               .then(d => { 
                 this.setState({ 
                    GetIndies: JSON.stringify(d)
                 }) 
               }, () => { 
                 this.setState({ 
                   requestFailed: true 
                 }) 
               }) 
           } 
           render() { 
             if (this.state.requestFailed) return <p>Failed!</p> 
             if (!this.state.GetIndies) return <p>Loading...</p> 
             let returnData = JSON.parse(this.state.GetIndies)
             if (returnData.length === 0 ) return <select name = "indies"><option>No open rounds</option></select>
             return (
                   <select name = "indies"  onChange={this.handleChange}>
                    <option disabled selected value> -- select an Indie -- </option>
                      {returnData.map(p => <option value={p.org_organisation_id}>{p.org_description}</option>)}
                   </select>
             ) 
           } 
         } 
         
        export default GetIndies; 
        