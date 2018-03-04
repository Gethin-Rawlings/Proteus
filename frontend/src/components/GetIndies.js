import React, { Component } from 'react';


const urlForNetworks  = Indies => 'http://localhost:5000/organisations?type=indie'

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
             if (returnData.length === 0 ) return <select id = "Indies"><option>No open rounds</option></select>
             return (
                   <select id = "Indies">
                      {returnData.map(p => <option name = "Indies" value={p.org_organisation_id} onChange={this.handleChange}>{p.org_description}</option>)}
                   </select>
             ) 
           } 
         } 
         
        export default GetIndies; 
        