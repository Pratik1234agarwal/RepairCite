import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import axios from 'axios';

const PhoneList = () => {
  const [loading, setLoading] = useState(true);
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('/api');
        setPhones(res.data.phones);
        setLoading(false);
      } catch (err) {
        console.log(err);
        alert(err.response.data.err);
        setLoading(false);
      }
    }
    fetchData();
  }, [setLoading, setPhones]);

  return loading ? (
    <Loader />
  ) : (
    <div className='container'>
      <h1 className='text-dark text-center'>Add Phone</h1>
      {phones.map((phone) => (
        <div className='list-item-phone' key={phone._id}>
          <Link to={`/admin/edit/${phone._id}`}>{phone.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default PhoneList;
