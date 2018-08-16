import React from 'react';
import "./Main.css";
import Brands from "./Brands";
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

        
    } catch (err) {
        this.setState({ requestFailed: true })
    } 
  }
  render() {
    if (!this.state.programmes) return <p>Loading...</p>
    let returnData = JSON.stringify(this.state.programmes)

    return (
      <div  onChange={this.handleChange}>
       <p>Programme Title: {this.state.programmeTitle} </p>
       <p>Episode Title: {this.state.episodeTitle} </p>
       <p>Commssion Title : {this.state.commissionTitle} </p>
       <p>supplier : {this.state.supplier} </p>
       <Brands />
      </div>
    );
  }
}
export default ProgrammeSection;