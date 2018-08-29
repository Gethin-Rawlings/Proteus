import React from 'react';
import "./Main.css";
import Navbar from "./Navbar";
import Footer from './Footer';
import TransmissionSection from "./TransmissionSection";
import { updateUsers   } from './apiCalls';
import ProgrammeSection from "./ProgrammeSection";
import { Tab, Tabs} from 'react-bootstrap';
import CoreDetails from "./CoreDetails";

class ProgrammeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      requestFailed: false,
      value: '',
      programme: ''
    }
  }
  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  }
  async handleSubmit(event) {
    event.preventDefault();
    if (window.confirm("Save?")) { 
      const dataForm = new FormData(event.target);
      try {
        await updateUsers(dataForm)
      
      } catch (err) {
        console.log(err)
      }
      alert('Changes Saved')
    }
  }
  render() {
    const programme = this.props.location.state.detail
    return (
      <div className="main">
        <Navbar />
        <section className="programmeDetails">
          <Tabs className="programmeDetailsTabs" defaultActiveKey={0} id="programmeDetailsTabs">      
            <section>
              <ProgrammeSection programme = {programme}/>  
            </section>
            <section>
              <TransmissionSection  programme = {programme}/>
            </section>
              <Tab eventKey={0} title="Core Details">
                <CoreDetails />
              </Tab>
              <Tab eventKey={1} className='test' title="Transmissions">Transmissions</Tab>
              <Tab eventKey={2} title="Compliance">Compliance</Tab>
              <Tab eventKey={3} title="Finance">Finance</Tab>
              <Tab eventKey={4} title="Recordings">Recordings</Tab>
              <Tab eventKey={5} title="Running Order">Running Order</Tab>
              <Tab eventKey={6} title="Rights">Rights</Tab>
              <Tab eventKey={7} title="Descriptions">Descriptions</Tab>
              <Tab eventKey={8} title="Pres Details">Pres Details</Tab>
              <Tab eventKey={9} title="Versions">Versions</Tab>
              <Tab eventKey={10} title="Audit">Audit</Tab>
          </Tabs>
        </section>
        <Footer />
      </div>
    );
  }
}

export default ProgrammeDetails