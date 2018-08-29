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
            <section>
              TX title 
            </section>
            <section>
            <input name="programmeTitle" className="programmeTitle" type="text" form="form" placeholder="programmeTitle" value={this.state.programmeTitle} onChange={this.handleChange} />
            </section>
            <section>
              Tx Details 
            </section>
            <section>
            <input name="episodeTitle" className="episodeTitle" type="text" form="form" placeholder="episodeTitle" value={this.state.episodeTitle} onChange={this.handleChange} />
            </section>
            <section>
              Tx Type 
            </section>
            <section>
            <input name="commissionTitle" className="commissionTitle" type="text" form="form" placeholder="commissionTitle" value={this.state.commissionTitle} onChange={this.handleChange} />
            </section>
            <section>
              Planned 
            </section>
            <section>
            <input name="commissionTitle" className="commissionTitle" type="text" form="form" placeholder="commissionTitle" value={this.state.commissionTitle} onChange={this.handleChange} />
            </section>
            <section>
              Billed 
            </section>
            <section>
            <input name="commissionTitle" className="commissionTitle" type="text" form="form" placeholder="commissionTitle" value={this.state.commissionTitle} onChange={this.handleChange} />
            </section>
        </section>
       
      </div>
    );
  }
}
export default TransmissionSection;