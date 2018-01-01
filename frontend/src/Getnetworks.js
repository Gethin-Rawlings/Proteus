import React, { Component } from 'react';


const urlForNetworks  = network => 'http://localhost:5000/rounds'

class Getnetworks extends Component {
    constructor(props){
        super(props)
        this.state = {
            requestFailed: false
        }
    }
    componentDidMount() { 
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
                    Getnetworks: JSON.stringify(d)
                 }) 
               }, () => { 
                 this.setState({ 
                   requestFailed: true 
                 }) 
               }) 
           } 
           render() { 
             if (this.state.requestFailed) return <p>Failed!</p> 
             if (!this.state.Getnetworks) return <p>Loading...</p> 
             let returnData = JSON.parse(this.state.Getnetworks)
             if (returnData.length === 0 ) return <select id = "Network"><option>No open rounds</option></select>
             return (
                   <select id = "Network">
                     {returnData.map(p => <option value={p.org_organisation_id}>{p.org_description}</option>)}
                   </select>
             ) 
           } 
         } 
         
        export default Getnetworks; 
        