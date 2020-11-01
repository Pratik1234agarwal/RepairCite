import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context/Context';

const Color = (props) => {
  const data = useContext(Context);
  const [colors, setColors] = useState([]);
  useEffect(() => {
    if (data.formData.type === '') {
      return props.history.push('/bookings/model');
    }
    const phone = data.phones.find(
      (phone) => phone.name === data.formData.modelName
    );
    setColors(phone.color);
  }, [data, setColors]);
  const onClick = (e) => {
    data.onChange('color', e.target.dataset.value);
    props.history.push('/bookings/date');
  };
  return (
    <div className='main-content container'>
      <h3>Select your Model Color </h3>
      {colors.map((color) => (
        <div
          key={color.code}
          style={{ background: `${color.code}` }}
          className='bg-white item'
        >
          <div
            data-value={color.name}
            className='text-center'
            onClick={onClick}
          >
            <span
              style={{ background: `${color.code}` }}
              className='check-box'
            ></span>
            {color.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Color;
