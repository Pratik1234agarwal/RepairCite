import React from 'react';
import './header.css';
import Logo from '../../images/repair.png';

const header = () => {
  return (
    <header className='header p-2'>
      {/* <h3>RepairCite</h3> */}
      <img src={Logo} className='logo-img-booking' />
    </header>
  );
};

export default header;
