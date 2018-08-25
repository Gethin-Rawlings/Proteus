import React from 'react';
import { Tab, Tabs} from 'react-bootstrap';


class ProposalDetails extends React.Component {
  
  render() {
    
    return (
      <div >
       
          <Tabs defaultActiveKey={2} id="testing">      

              <Tab eventKey={1} title="Tab 1">Core Details</Tab>
              <Tab eventKey={2} title="Tab 2">Transmissions</Tab>
              <Tab eventKey={3} title="Tab 3">Compliance</Tab>
              <Tab eventKey={4} title="Tab 4">Finance</Tab>


          </Tabs>

      </div>
    );
  }
}

export default ProposalDetails