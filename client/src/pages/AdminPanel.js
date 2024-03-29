import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BookingsAdmin from '../components/BookingsAdmin';

const AdminPanel = (props) => {
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      return props.history.push('/admin/login');
    } else {
      axios.defaults.headers.common['x-auth-token'] = token;
    }
    async function fetchData() {
      try {
        const res = await axios.get('/api/booking/get/all');
        console.log(res.data);
        setBooking(res.data);
      } catch (err) {
        console.log(err.response);
        if (err.response.status === 401) {
          alert('The login session has expired, login in again');
          localStorage.clear();
          return props.history.push('/admin/login');
        }
        console.log('errr in bookin');
        alert(err.response.data.err);
      }
    }
    fetchData();
  }, [setBooking]);
  const deleteBooking = async (id) => {
    if (
      !window.confirm(
        'Are you sure you want to delete the booking, Action irreversible'
      )
    )
      return;
    try {
      await axios.delete(`/api/booking/${id}`);
      alert('Booking successfully removed');
      setBooking(booking.filter((book) => book._id !== id));
    } catch (err) {
      alert(err.response.data.err);
    }
  };
  return (
    <div className='container'>
      <h1 className='text-dark text-center'>Admin Panel</h1>
      <hr />
      <h3 className='my-4 text-center'>Manage Phones</h3>
      <div className='btn-actions'>
        {' '}
        <Link to='/admin/list'>
          <button className='btn btn-primary'>List All Phones</button>
        </Link>
        <Link to='/admin/new'>
          <button className='btn btn-dark'>Add Phone</button>
        </Link>
      </div>

      <hr />
      <h3 className='my-4 text-center'>Bookings </h3>
      <BookingsAdmin bookings={booking} deleteBooking={deleteBooking} />
    </div>
  );
};

export default AdminPanel;
