import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import AdminLogin from './pages/AdminLogin';
import AdminPanel from './pages/AdminPanel';
import Bookings from './pages/Bookings';
import AddPhone from './pages/AddPhone';
import PhoneList from './pages/PhoneList';
import EditPhone from './pages/EditPhone';

import * as bs from './css/bootstrap.min.css';
import './css/style.css';
import './css/pe-icon-7-stroke.css';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/booking' component={Booking} />
        <Route path='/bookings' component={Bookings} />
        <Route path='/admin/login' component={AdminLogin} />
        <Route path='/admin/panel' component={AdminPanel} />
        <Route path='/admin/new' component={AddPhone} />
        <Route path='/admin/list' component={PhoneList} />
        <Route path='/admin/edit/:id' component={EditPhone} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
