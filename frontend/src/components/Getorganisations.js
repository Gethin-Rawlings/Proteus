import React, { Component } from 'react';
import { getOrganisations } from './apiCalls';

class Getorganisations extends Component {
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
        const type = this.props.name
        const data = await getOrganisations(type)
        this.setState({ Getorganisations: data })
    } catch (err) {
        this.setState({ requestFailed: true })
    }
  }
  render() {
    if (this.state.requestFailed) return <p>Failed!</p>
    if (!this.state.Getorganisations) return <p name="network" className="network">Loading...</p>
    let returnData = this.state.Getorganisations
    return (
      <select className='networks' name="network"  form="form" onChange={this.handleChange}>
        <option key={0} value={0}>{this.props.name}</option>
        {returnData.map(p => <option key={p.org_organisation_id} value={p.org_organisation_id}>{p.org_description}</option>)}
      </select>
    )
  }
}
export default Getorganisations;
