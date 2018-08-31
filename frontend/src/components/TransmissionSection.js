import React from 'react';
import "./Main.css"


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
  
  render() {
    
    return (
      <div  onChange={this.handleChange} >
      <form onSubmit={this.handleSubmit} id='form' ></form>
        <section className="transmission" name="transmission">
            <section className="transmissionSectionText">
              TX title 
            </section>
            <section>
            <input name="programmeTitle" className="programmeTitle" type="text" form="form" placeholder="TX Title" value={this.state.programmeTitle} onChange={this.handleChange} />
            </section>
            <section className="transmissionSectionText">
              Tx Details 
            </section>
            <section>
            <input name="episodeTitle" className="episodeTitle" type="text" form="form" placeholder="TX Details" value={this.state.episodeTitle} onChange={this.handleChange} />
            </section>
            <section className="transmissionSectionText">
              Tx Type 
            </section>
            <section>
            <input name="commissionTitle" className="commissionTitle" type="text" form="form" placeholder="TX Type" value={this.state.commissionTitle} onChange={this.handleChange} />
            </section>
            <section className="transmissionSectionText">
              Planned 
            </section>
            <section>
            <input name="commissionTitle" className="commissionTitle" type="text" form="form" placeholder="Planned" value={this.state.commissionTitle} onChange={this.handleChange} />
            </section>
            <section className="transmissionSectionText">
              Billed
            </section>
            <section>
            <input name="commissionTitle" className="commissionTitle" type="text" form="form" placeholder="Billed" value={this.state.commissionTitle} onChange={this.handleChange} />
            </section>
        </section>
       
      </div>
    );
  }
}
export default TransmissionSection;