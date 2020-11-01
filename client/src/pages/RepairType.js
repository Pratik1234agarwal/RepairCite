import React, { useContext } from 'react';
import { Context } from '../context/Context';

const RepairType = (props) => {
  const data = useContext(Context);
  React.useEffect(() => {
    if (data.formData.pincode === '') {
      props.history.push('/bookings/model');
    }
    const temp = data.phones.find(
      (phone) => phone.name === data.formData.modelName
    );
    setPhone(temp);
  }, [data]);
  const [checked, setChecked] = React.useState({
    charging: false,
    screen: false,
    battery: false,
  });
  const onClick = (type) => {
    setChecked({ ...checked, [type]: !checked[type] });
  };
  const onSubmit = () => {
    let text = '';
    let price = 0;
    if (checked.charging) {
      text = 'Charging Port Fix ';
      price += phone.charging;
    }
    if (checked.screen) {
      text += 'Screen Fix ';
      price += phone.screen;
    }
    if (checked.battery) {
      text += 'Battery Replacement';
      price += phone.battery;
    }
    data.onBulkChange({ type: text, price });
    props.history.push('/bookings/color');
  };
  const [phone, setPhone] = React.useState({});
  return (
    <div className='main-content container'>
      <h3>Select Type of Repair needed</h3>
      {phone.charging && (
        <div className='bg-white item' key='1' data-value='Charging Port Fix'>
          <span className='check-box'>
            {checked.charging && (
              <svg
                width='24px'
                height='24px'
                viewBox='0 0 19 19'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>v</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id='icons'
                  stroke='none'
                  stroke-width='1'
                  fill='none'
                  fillRule='evenodd'
                  transform='translate(-163.000000, -71.000000)'
                >
                  <g id='v' transform='translate(163.000000, 71.000000)'>
                    <circle
                      id='Oval-3-Copy-5'
                      fill='#017aff'
                      cx='9.5'
                      cy='9.5'
                      r='9.5'
                    ></circle>
                    <g
                      id="v's-copy-3"
                      transform='translate(5.000000, 7.000000)'
                      stroke='#FFFFFF'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                    >
                      <polyline
                        id='v'
                        points='0 3.16268347 3.30322266 6 9 0'
                      ></polyline>
                    </g>
                  </g>
                </g>
              </svg>
            )}
          </span>
          <div onClick={() => onClick('charging')}>Charging Port Fix</div>
          <span class='price'>+(${phone.charging})</span>
        </div>
      )}
      {phone.screen && (
        <div className='bg-white item' key='2' data-value='Charging Port Fix'>
          <span className='check-box'>
            {' '}
            {checked.screen && (
              <svg
                width='24px'
                height='24px'
                viewBox='0 0 19 19'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>v</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id='icons'
                  stroke='none'
                  stroke-width='1'
                  fill='none'
                  fillRule='evenodd'
                  transform='translate(-163.000000, -71.000000)'
                >
                  <g id='v' transform='translate(163.000000, 71.000000)'>
                    <circle
                      id='Oval-3-Copy-5'
                      fill='#017aff'
                      cx='9.5'
                      cy='9.5'
                      r='9.5'
                    ></circle>
                    <g
                      id="v's-copy-3"
                      transform='translate(5.000000, 7.000000)'
                      stroke='#FFFFFF'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                    >
                      <polyline
                        id='v'
                        points='0 3.16268347 3.30322266 6 9 0'
                      ></polyline>
                    </g>
                  </g>
                </g>
              </svg>
            )}
          </span>
          <div data-value='charging' onClick={() => onClick('screen')}>
            Screen Fix
          </div>
          <span class='price'>+(${phone.screen})</span>
        </div>
      )}
      {phone.battery && (
        <div className='bg-white item' key='1' data-value='Charging Port Fix'>
          <span className='check-box'>
            {checked.battery && (
              <svg
                width='24px'
                height='24px'
                viewBox='0 0 19 19'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
              >
                <title>v</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id='icons'
                  stroke='none'
                  stroke-width='1'
                  fill='none'
                  fillRule='evenodd'
                  transform='translate(-163.000000, -71.000000)'
                >
                  <g id='v' transform='translate(163.000000, 71.000000)'>
                    <circle
                      id='Oval-3-Copy-5'
                      fill='#017aff'
                      cx='9.5'
                      cy='9.5'
                      r='9.5'
                    ></circle>
                    <g
                      id="v's-copy-3"
                      transform='translate(5.000000, 7.000000)'
                      stroke='#FFFFFF'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                    >
                      <polyline
                        id='v'
                        points='0 3.16268347 3.30322266 6 9 0'
                      ></polyline>
                    </g>
                  </g>
                </g>
              </svg>
            )}
          </span>
          <div onClick={() => onClick('battery')}>Battery Replacement</div>
          <span class='price'>+(${phone.battery})</span>
        </div>
      )}
      {checked.screen || checked.charging || checked.battery ? (
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
  );
};

export default RepairType;
