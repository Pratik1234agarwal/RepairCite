import React, { useContext } from 'react';
import { Context } from '../context/Context';

const ModelName = (props) => {
  const data = useContext(Context);
  console.log(data);
  const onClick = (e) => {
    data.onChange('modelName', e.target.dataset.value);
    data.pathChange('/bookings/pincode');
    console.log(e.target.dataset);
    props.history.push('/bookings/pincode');
  };
  return (
    <div className='main-content container'>
      <h3>Select Your iPhone Model ?</h3>
      {data.phones.map((phone) => (
        <div key={phone._id} className='bg-white item'>
          <div
            onClick={onClick}
            data-value={phone.name}
            className='text-center'
          >
            {phone.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ModelName;
