import React, { useContext, useEffect } from 'react';
import { Context } from '../context/Context';
import { pincodes } from '../helpers';

const Pincode = (props) => {
  const [pincode, setPincode] = React.useState('');
  const data = useContext(Context);
  useEffect(() => {
    if (data.formData.modelName === '') {
      return props.history.push('/bookings/model');
    }
  }, [data]);
  const onChange = (e) => {
    if (
      (e.target.value.length <= 5 &&
        Number.isInteger(parseInt(e.target.value.substr(-1)))) ||
      e.target.value === ''
    ) {
      setPincode(e.target.value);
    }
  };
  const onClick = (e) => {
    if (pincodes.includes(parseInt(pincode))) {
      data.onChange('pincode', pincode);
      props.history.push('/bookings/repair-type');
    } else {
      data.setModal(true, 'We Do Not Cover that Pincode yet.');
    }
  };
  return (
    <div className='main-content container'>
      <h3>Enter Your Pincode</h3>
      <div className='content-per-line'>
        <input
          value={pincode}
          type='tel'
          onChange={onChange}
          placeholder='Enter your zip code'
        />

        {pincode.length === 5 ? (
          <button
            style={{ borderRadius: '10px' }}
            className='btn btn-primary mt-5 btn-pincode'
            onClick={onClick}
          >
            Continue
          </button>
        ) : (
          <button
            style={{ borderRadius: '10px' }}
            className='btn btn-primary mt-5 btn-pincode'
            disabled
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
};

export default Pincode;
