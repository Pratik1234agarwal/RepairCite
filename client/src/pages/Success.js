import React, { useEffect } from 'react';
import { Context } from '../context/Context';
import Tick from '../images/Tick.png';
const Success = (props) => {
  const { formData } = React.useContext(Context);
  useEffect(() => {
    if (formData.phone === '') {
      props.history.push('/bookings/model');
    }
  }, [formData]);
  return (
    <div className='main-content container'>
      <img src={Tick} className='img-success' />
      <h4 className='mt-4'>Congrats your Repair has been booked.</h4>
      <p>Thanks for choosing RepairCite. Have a Good Day</p>
    </div>
  );
};

export default Success;
