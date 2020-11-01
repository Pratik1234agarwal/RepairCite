import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import ModelName from './ModelName';
import RepairType from './RepairType';
import Pincode from './Pincode';
import Color from './Color';
import Date from './Date';
import Address from './Address';
import Summary from './Summary';
import Success from './Success';
import Header from '../components/header/Header';
import ContextComponent from '../context/Context';
import ModalWrapper from '../components/ModalWrapper';
import '../css/bookings.css';
import Logo from '../images/repair.png';

const Bookings = () => {
  return (
    <ContextComponent>
      <Header />
      <ModalWrapper />
      <Router>
        <Switch>
          <Route path='/bookings/model' component={ModelName} />
          <Route path='/bookings/repair-type' component={RepairType} />
          <Route path='/bookings/pincode' component={Pincode} />
          <Route path='/bookings/color' component={Color} />
          <Route path='/bookings/date' component={Date} />
          <Route path='/bookings/address' component={Address} />
          <Route path='/bookings/summary' component={Summary} />
          <Route path='/bookings/success' component={Success} />
          <Redirect to='/bookings/model' />
        </Switch>
      </Router>
    </ContextComponent>
  );
};

export default Bookings;
