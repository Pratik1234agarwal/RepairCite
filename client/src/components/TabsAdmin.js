import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const TabsAdmin = ({ active, expired }) => {
  return (
    <Tabs defaultActiveKey='active' id='uncontrolled-tab-example'>
      <Tab eventKey='active' title='Active'>
        {active}
      </Tab>
      <Tab eventKey='expired' title='Expired'>
        {expired}
      </Tab>
    </Tabs>
  );
};

export default TabsAdmin;
