import React, {Component} from 'react';
import './displayusers.css'
import {withRouter} from "react-router-dom"

class Displayprogrammes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programmes: '[{"":""}]',
      history: this.props.history
    };
    this.handleClick = this
      .handleClick
      .bind(this);
  }
  handleClick(event) {
    const value = event.target.id;
    console.log(value)
    if (event) {
      this
        .props
        .history
        .push({
          pathname: "/ProgrammeDetails",
          state: {
            detail: value
          }
        });
    }
  }
  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({[name]: value});
  }
  createTable = (tableData) => {
    let tableLength=tableData.length
    let table = []
    for (let i = 0; i < tableLength; i++) {
        let children = []
        let row = Object.values(tableData[i])
        row.map(data => children.push(<td id={row[0]+row[1]} key={data}>{data}</td>))
        table.push(<tr key={row} onClick={this.handleClick}>{children}</tr>)
    }
    if (table.length === 1) {
        return null
    }
    else return table
  }
  render() {
    const returnData = JSON.parse(this.props.programmes)
    let tableHeaders = [];
    if (returnData.length>0){
      let headers = Object.keys(returnData[0]);
      headers.map(header => tableHeaders.push(<th key={header}>{header}</th>))
    }
    return (
    <section>
      <table className='displayusers'>
        <tbody>
            <tr>{tableHeaders}</tr>
            {this.createTable(returnData)}
        </tbody>
      </table> 
    </section>
    )
  }
}
export default withRouter(Displayprogrammes);