import React, { Component } from 'react';


const urlForNetworks  = indie => 'http://ec2-52-56-248-133.eu-west-2.compute.amazonaws.com:5000/organisations?type=indie'

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
    componentDidMount() { 
        fetch(urlForNetworks(this.props.indie)) 
        .then(response => { 
            if (!response.ok) { 
                throw Error("Network request failed") 
            } 
                 return response 
               }) 
               .then(d => d.json()) 
               
               .then(d => { 
                 this.setState({ 
                    Getindie: JSON.stringify(d)
                 }) 
               }, () => { 
                 this.setState({ 
                   requestFailed: true 
                 }) 
               }) 
           } 
           render() { 
             if (this.state.requestFailed) return <p>Failed!</p> 
             if (!this.state.Getindie) return <p>Loading...</p> 
             let returnData = JSON.parse(this.state.Getindie)
             if (returnData.length === 0 ) return <select name = "indie"><option>No open rounds</option></select>
             return (
                   <select name = "indie" form="form"  onChange={this.handleChange}>
                    <option selected value={0}> -- select a Indie -- </option>
                      {returnData.map(p => <option value={p.org_organisation_id}>{p.org_description}</option>)}
                   </select>
             ) 
           } 
         } 
         
        export default Getindie; 
        