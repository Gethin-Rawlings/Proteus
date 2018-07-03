import React, { Component } from 'react';
import { getProduction } from './apiCalls';

class GetProductionDepts extends Component {
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
      const data = await getProduction()
      this.setState({ Getproduction: data })
    } catch (err) {
      this.setState({ requestFailed: true })
    }
  }
  render() {
    if (this.state.requestFailed) return <p>Failed!</p>
    if (!this.state.Getproduction) return <p>Loading...</p>
    let returnData = this.state.Getproduction
    return (
      <select className='productions' name="production" form="form" onChange={this.handleChange}>
        <option selected key={0} value={0}> -- select a Production deptartment -- </option>
        {returnData.map(p => <option key={p.org_organisation_id} value={p.org_organisation_id} >{p.org_description}</option>)}
      </select>
    )
  }
}
export default GetProductionDepts;
