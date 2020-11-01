import React, { useContext } from 'react';
import { Context } from '../context/Context';

const Address = (props) => {
  const { formData, onChange } = useContext(Context);
  React.useEffect(() => {
    if (formData.date === '') {
      props.history.push('/bokings/model');
    }
  }, []);
  const onSubmit = () => {
    console.log('clicked, move aheead');
    props.history.push('/bookings/summary');
  };
  return (
    <div className='main-content container'>
      <h3>Enter your Address </h3>
      <div className='content-per-line'>
        <input
          value={formData.address}
          type='tel'
          placeholder='Enter your Address'
          onChange={(e) => onChange('address', e.target.value)}
        />
        <textarea
          value={formData.additionInfo}
          onChange={(e) => onChange('additionInfo', e.target.value)}
          className='mt-4 addition-info'
          placeholder='Any Additional Info (optional)'
        />
        {formData.address !== '' && formData.address.length > 5 ? (
          <button
            style={{ borderRadius: '10px' }}
            className='btn btn-primary mt-5 btn-pincode'
            onClick={onSubmit}
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

export default Address;
