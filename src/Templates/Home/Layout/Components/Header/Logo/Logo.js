import React from 'react';
import logo from './logo.png'
import '../Header.css'

function Logo() {
  return (
    <div className='k-logo'>
      <img src={logo} alt='store-logo'className='mw-100' height='41' width='135'/>
    </div>
  );
}

export default Logo;