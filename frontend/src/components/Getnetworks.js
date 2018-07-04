import React, { Component } from 'react';
import { getNetwork } from './apiCalls';

class GetNetworks extends Component {
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
  async componentDidMount() {
    try {
      const data = await getNetwork()
      this.setState({ Getnetworks: data })
    } catch (err) {
      this.setState({ requestFailed: true })
    }
  }
  render() {
    if (this.state.requestFailed) return <p>Failed!</p>
    if (!this.state.Getnetworks) return <p>Loading...</p>
    let returnData = this.state.Getnetworks
    return (
      <select className='networks' name="network" form="form" onChange={this.handleChange}>
        <option key={0} value={0}> -- select a Network -- </option>
        {returnData.map(p => <option key={p.org_organisation_id} value={p.org_organisation_id}>{p.org_description}</option>)}
      </select>
    )
  }
}
export default GetNetworks;
