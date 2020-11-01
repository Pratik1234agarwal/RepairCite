import React from 'react';

const Selector = ({ heading, data, type, onChange }) => {
  return (
    <div class='preference-radio'>
      <p>{heading}</p>
      <div class='row'>
        {data.map((ele) => (
          <div class='col-xs-12 col-md-4 sm-box'>
            <div class='styled-radio'>
              <input
                onChange={onChange}
                type='radio'
                id={ele.code}
                value={ele.name}
                name={type}
              />
              <label for={ele.code}>{ele.name}</label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Selector;
