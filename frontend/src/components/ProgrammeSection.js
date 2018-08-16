import React from 'react';
import "./programmeSection.css";
import {getProgrammeSection} from "./apiCalls";

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
      <div  onChange={this.handleChange} className='programmeSection'>
       <p>Programme Title: {this.state.programmeTitle} </p>
       <p>Episode Title: {this.state.episodeTitle} </p>
       <p>Commssion Title : {this.state.commissionTitle} </p>
       <p>Supplier : {this.state.supplier} </p>
       <p>Duration : {this.state.duration} </p>
       <p>Content type : {this.state.prgType} </p>
       <p>Version Title : {this.state.versionTitle} </p>
       <p>Programme Status : {this.state.txStatus} </p>
       <p>Proteus Prog Number : {this.state.proteusPrgNumber} </p>
       <p>Brand : {this.state.brand} </p>
       <p>Series : {this.state.series} </p>
      </div>
    );
  }
}
export default ProgrammeSection;