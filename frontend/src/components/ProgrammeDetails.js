import React from 'react';
import "./Main.css";
import Navbar from "./Navbar";
import Footer from './Footer';
import "./userDetails.css";
import { updateUsers   } from './apiCalls';
import ProgrammeSection from "./ProgrammeSection";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

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
        <section >
          <Tabs>      
            <TabList >
              <Tab>Core Details</Tab>
              <Tab>Transmissions</Tab>
              <Tab>Compliance</Tab>
              <Tab>Finance</Tab>
              <Tab>Recordings</Tab>
              <Tab>Running Order</Tab>
              <Tab>Rights</Tab>
              <Tab>Descriptions</Tab>
              <Tab>Pres Details</Tab>
              <Tab>Versions</Tab>
              <Tab>Audit</Tab>
            </TabList>
            <ProgrammeSection programme = {programme}/>
            <TabPanel>
              <section className = 'card'>
                Core details to go here 
              </section>
            </TabPanel>
            <TabPanel>
              <section>
                Tx section
              </section>
              <section>
                Transmissions
              </section>
            </TabPanel>
            <TabPanel>
              <section>
                Tx section
              </section>
              <section>
                Compliance
              </section>
            </TabPanel>
            <TabPanel>
              <section>
                Tx section
              </section>
              <section>
                Finance
              </section>
            </TabPanel>
            <TabPanel>
              <section>
                Tx section
              </section>
              <section>
                Recordings
              </section>
            </TabPanel>
            <TabPanel>
              <section>
                Tx section
              </section>
              <section>
                Running Order
              </section>
            </TabPanel>
            <TabPanel>
              <section>
                Tx section
              </section>
              <section>
                Rights
              </section>
            </TabPanel>
            <TabPanel>
              <section>
                Tx section
              </section>
              <section>
                Descriptions
              </section>
            </TabPanel>
            <TabPanel>
              <section>
                Tx section
              </section>
              <section>
                PRES Details
              </section>
            </TabPanel>
            <TabPanel>
              <section>
                Tx section
              </section>
              <section>
                Versions
              </section>
            </TabPanel>
            <TabPanel>
              <section>
                Tx section
              </section>
              <section>
                Audit
              </section>
            </TabPanel>
          </Tabs>
        </section>
        <Footer />
      </div>
    );
  }
}

export default ProgrammeDetails