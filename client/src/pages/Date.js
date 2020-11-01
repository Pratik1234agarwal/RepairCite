import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../context/Context';
import Time from '../components/Time';
import { format } from 'date-fns';

const DateTime = (props) => {
  //const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const { formData, onChange } = useContext(Context);
  useEffect(() => {
    if (formData.color === '') {
      return props.history.push('/bookings/model');
    }
  }, []);
  const onChangeTime = (e) => {
    console.log(e.target.dataset.value);
    setTime(e.target.dataset.value);
  };
  const onSubmit = () => {
    // onChange('date', date);
    onChange('timeSlot', time);
    props.history.push('/bookings/address');
  };
  useEffect(() => {
    setTime('');
  }, [formData.date]);
  return (
    <div className='main-content container'>
      <h3>Select Date and time </h3>
      <h4>Select a Date</h4>
      <input
        value={formData.date}
        onChange={(e) => onChange('date', e.target.value)}
        type='date'
        className='form-control item'
        name='date'
        min={format(new Date(), 'yyyy-MM-dd')}
      />

      {formData.date !== '' && (
        <>
          <h4 className='mt-5'>Select a Time Slote</h4>
          <Time date={formData.date} onChange={onChangeTime} />
        </>
      )}
      {formData.date !== '' && time !== '' && (
        <button
          style={{ borderRadius: '10px' }}
          className='btn btn-primary mt-5 btn-pincode'
          onClick={onSubmit}
        >
          Continue
        </button>
      )}
    </div>
  );
};

export default DateTime;
