import React from 'react';
import "./Main.css";
import {getProgrammeSection} from "./apiCalls";
import {CSVLink} from 'react-csv';

class ProgrammeSection extends React.Component {
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
        const data = await getProgrammeSection(this.props.programme) 
        this.setState({ programmes:(data)})
        this.setState( {programmeTitle:(this.state.programmes[0].programmeTitle)})
        this.setState( {episodeTitle:(this.state.programmes[0].episodeTitle)})
        this.setState( {commissionTitle:(this.state.programmes[0].commissionTitle)})
        this.setState( {supplier:(this.state.programmes[0].supplier)})
        this.setState( {duration:(this.state.programmes[0].duration)})
        this.setState( {prgType:(this.state.programmes[0].prgType)})
        this.setState( {versionTitle:(this.state.programmes[0].versionTitle)})
        this.setState( {txStatus:(this.state.programmes[0].txStatus)})
        this.setState( {proteusPrgNumber:(this.state.programmes[0].proteusPrgNumber)})
        this.setState( {contenttype:(this.state.programmes[0].contenttype)})
        this.setState( {brand:(this.state.programmes[0].brand)})
        this.setState( {series:(this.state.programmes[0].series)})    
    } catch (err) {
        this.setState({ requestFailed: true })
    } 
  }
  render() {
    if (!this.state.programmes) return <p>Loading...</p>
    return (
      <div  onChange={this.handleChange} >
      <form onSubmit={this.handleSubmit} id='form' ></form>
        <section className="programmeSection">
          <section className="programmeSectionText">Programme title </section>
            <section>
              <input name="programmeTitle" className="programmeTitle" type="text" form="form" placeholder="programmeTitle" value={this.state.programmeTitle} onChange={this.handleChange} />
            </section>
            <section className="programmeSectionText">Episode title </section>
             <section> 
               <input name="episodeTitle" className="episodeTitle" type="text" form="form" placeholder="episodeTitle" value={this.state.episodeTitle} onChange={this.handleChange} />
            </section>
            <section className="programmeSectionText">
              Commssion title 
            </section>
            <section>
              <input name="commissionTitle" className="commissionTitle" type="text" form="form" placeholder="commissionTitle" value={this.state.commissionTitle} onChange={this.handleChange} />
            </section>
            <section className="programmeSectionText">
              Supplier 
            </section>
            <section>
              <input name="supplier" className="supplier" type="text" form="form" placeholder="supplier" value={this.state.supplier} onChange={this.handleChange} /> 
            </section>
            <section className="programmeSectionText">
              Duration 
            </section>
            <section>
              <input name="duration" className="duration" type="text" form="form" placeholder="duration" value={this.state.duration} onChange={this.handleChange} />
            </section>
            <section className="programmeSectionText">
              Content type 
            </section>
            <section>
              <input name="prgType" className="prgType" type="text" form="form" placeholder="prgType" value={this.state.prgType} onChange={this.handleChange} />
            </section>
            <section className="programmeSectionText">
              Version title 
            </section>
            <section>
              <input name="programmeTitle" className="programmeTitle" type="text" form="form" placeholder="programmeTitle" value={this.state.programmeTitle} onChange={this.handleChange} />
            </section>
            <section className="programmeSectionText">
              Programme Status 
            </section>
            <section>
              <input name="txStatus" className="txStatus" type="text" form="form" placeholder="txStatus" value={this.state.txStatus} onChange={this.handleChange} />
            </section>
            <section className="programmeSectionText">
              Proteus Prog Number 
            </section>
            <section>
              <input name="proteusPrgNumber" className="proteusPrgNumber" type="text" form="form" placeholder="proteusPrgNumber" value={this.state.proteusPrgNumber} onChange={this.handleChange} />
            </section>
            <section className="programmeSectionText">
              Brand 
            </section>
            <section>
              <input name="Brand" className="Brand" type="text" form="form" placeholder="Brand" value={this.state.brand} onChange={this.handleChange} />
            </section>
            <section className="programmeSectionText">
              Series 
            </section>
            <section>
              <input name="series" className="series" type="text" form="form" placeholder="series" value={this.state.series} onChange={this.handleChange} />
            </section>
            <section>
              <button id="save" name = 'save' className="save"  form="form">Save</button>
            </section>
            <section>
              <button id="reset" type="reset"  form="form">Reset</button>
            </section>
        </section>  
      </div>
    );
  }
}
export default ProgrammeSection;