import React from 'react';
import "./Main.css"
import {getTransmissionSection} from "./apiCalls";

class TransmissionSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      programme: '',
      history: this.history
    };
    this.handleChange = this
      .handleChange
      .bind(this);
  /*  this.handleSubmit = this
      .handleSubmit
      .bind(this); */
  }
  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({[name]: value});
  }
  async componentDidMount() {
    try {
        const data = await getTransmissionSection(this.props.programme) 
        this.setState({ transmission:(data)})
        this.setState( {transmissionTitle:(this.state.transmission[0].transmissionTitle)})
        this.setState( {txType:(this.state.transmission[0].txType)})
        this.setState( {plannedTime:(this.state.transmission[0].plannedTime)})
        this.setState( {txDetails:(this.state.transmission[0].txDetails)})
        this.setState( {plannedDuration:(this.state.transmission[0].plannedDuration)})
        this.setState( {billedDuration:(this.state.transmission[0].billedDuration)})
        this.setState( {billedTime:(this.state.transmission[0].billedTime)})
        this.setState( {txStatus:(this.state.transmission[0].txStatus)})
        this.setState( {proteusPrgNumber:(this.state.transmission[0].proteusPrgNumber)})
        this.setState( {contenttype:(this.state.transmission[0].contenttype)})
        this.setState( {brand:(this.state.transmission[0].brand)})
        this.setState( {series:(this.state.transmission[0].series)})   
    } catch (err) {
        this.setState({ requestFailed: true })
    } 
  }
  render() {
    if (!this.state.transmission) return <p>Loading...</p>
    return (
      
      <div  onChange={this.handleChange} >

      <form onSubmit={this.handleSubmit} id='form' ></form>
        <section className="transmission" name="transmission">
            <section className="transmissionSectionText">
              TX title 
            </section>
            <section>
            <input name="transmissionTitle" className="transmissionTitle" 
              type="text" form="form" placeholder="TX Title" 
              value={this.state.transmissionTitle} onChange={this.handleChange} />
            </section>
            <section className="transmissionSectionText">
              Tx Details 
            </section>
            <section>
            <input name="txDetails" className="txDetails" 
            type="text" form="form" placeholder="TX Details" 
            value={this.state.txDetails} onChange={this.handleChange} />
            </section>
            <section className="transmissionSectionText">
              Tx Type 
            </section>
            <section>
            <input name="txType" className="txType" 
              type="text" form="form" placeholder="TX Type" 
              value={this.state.txType} onChange={this.handleChange} />
            </section>
            <section className="transmissionSectionText">
              Planned Time
            </section>
            <section>
            <input name="plannedTime" className="plannedTime" 
              type="text" form="form" placeholder="Planned" 
              value={this.state.plannedTime} onChange={this.handleChange} />
            </section>
            <section className="transmissionSectionText">
              Planned Duration
            </section>
            <section>
            <input name="plannedDuration" className="plannedDuration" 
              type="text" form="form" placeholder="Planned" 
              value={this.state.plannedDuration} onChange={this.handleChange} />
            </section>
            <section className="transmissionSectionText">
              Billed Time
            </section>
            <section>
            <input name="billedTime" className="billedTime" 
              type="text" form="form" placeholder="Billed" 
              value={this.state.billedTime} onChange={this.handleChange} />
            </section>
            <section className="transmissionSectionText">
              Billed Duration
            </section>
            <section>
            <input name="billedDuration" className="billedDuration" 
              type="text" form="form" placeholder="Billed" 
              value={this.state.billedDuration} onChange={this.handleChange} />
            </section>
        </section>
       
      </div>
    );
  }
}
export default TransmissionSection;