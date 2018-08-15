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
/*  async componentDidMount(event) {
    event.preventDefault();
    try {
      const data = await getProgrammeSection(this.programme)
      this.setState({
        programmes: JSON.stringify(data)
      })
    } catch (err) {
      console.log(err)
    }
  }*/
  render() {
    return (
      <div className="main">
       stuff will go here
       <Brands />
      </div>
    );
  }
}
export default ProgrammeSection;