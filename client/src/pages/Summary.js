import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../context/Context';
import Loader from '../components/Loader';
import axios from 'axios';

const Summary = (props) => {
  const data = useContext(Context);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (data.formData.address === '') {
      props.history.push('/bookings/model');
    }
  }, [data]);
  const onChange = (e) => {
    console.log(e.target);
    if (
      (e.target.value.length <= 10 &&
        Number.isInteger(parseInt(e.target.value.substr(-1)))) ||
      e.target.value === ''
    ) {
      console.log(e.target.value);
      data.onChange('phone', e.target.value);
    }
  };
  const onClick = async () => {
    console.log('Clicked');
    //data.onChange('phone', phone);
    setLoading(true);
    try {
      const res = await axios.post('/api/booking', data.formData);
      setLoading(false);
      props.history.push('/bookings/success');
    } catch (err) {
      data.setModal(true, err.response.data.err);
      setLoading(false);
    }
  };
  return (
    <>
      <div className='main-content container'>
        <h3>Booking Summary</h3>
        <div className='fesilities summary-box'>
          <ul>
            <li>
              <p>
                <strong>Type: </strong>
                {data.formData.type}
              </p>
            </li>
            <li>
              <p>
                <strong>Model Name: </strong>
                {data.formData.modelName}
              </p>
            </li>
            <li>
              <p>
                <strong>Date and Time: </strong>
                {data.formData.date} {data.formData.timeSlot}
              </p>
            </li>
            <li>
              <p>
                <strong>Address : </strong>
                {data.formData.address}
              </p>
            </li>
            {data.formData.additionInfo && (
              <li>
                <p>
                  <strong>Addition Info: </strong>
                  {data.formData.additionInfo}
                </p>
              </li>
            )}
          </ul>

          <h4>
            Total cost
            <span>{data.formData.price} $</span>
          </h4>
        </div>
        <input
          className='my-5'
          value={data.formData.phone}
          type='tel'
          style={{
            boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
            padding: '20px',
            maxWidth: '100%',
          }}
          onChange={onChange}
          placeholder='Enter a Phone number'
        />
        {data.formData.phone !== '' ? (
          <button
            onClick={onClick}
            style={{
              borderRadius: '10px',
              fontSize: '1.3rem',
              maxWidth: '100%',
              padding: '20px',
            }}
            className='btn btn-primary mt-5 btn-pincode'
          >
            <strong>Confirm Booking</strong>
          </button>
        ) : (
          <button
            style={{
              borderRadius: '10px',
              fontSize: '1.3rem',
              maxWidth: '100%',
              padding: '20px',
            }}
            className='btn btn-primary mt-5 btn-pincode'
            disabled
          >
            <strong>Confirm Booking</strong>
          </button>
        )}
      </div>
      {loading && <Loader />}
    </>
  );
};

export default Summary;
