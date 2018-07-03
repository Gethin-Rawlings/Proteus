import React, { Component } from 'react';


const urlForNetworks = network => 'http://ec2-52-56-248-133.eu-west-2.compute.amazonaws.com:5000/organisations?type=open'

class GetOpenRounds extends Component {
  constructor(props) {
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
    this.setState({ [name]: value });
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
          Getopenrounds: JSON.stringify(d)
        })
      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  }
  render() {
    if (this.state.requestFailed) return <p>Failed!</p>
    if (!this.state.Getopenrounds) return <p>Loading...</p>
    let returnData = JSON.parse(this.state.Getopenrounds)
    if (returnData.length === 0) return <select id="Openrounds"><option>No open rounds</option></select>
    return (
      <select id="Openrounds">
        {returnData.map(p => <option name="Openrounds" value={p.org_organisation_id} onChange={this.handleChange}>{p.org_description}</option>)}
      </select>
    )
  }
}

export default GetOpenRounds;
