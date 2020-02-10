import React from 'react';
import './navigation.css';
import {Link} from 'react-router-dom';

function Navigation(props) {
  return (
    <div className='bg-dark p-1'>
      <nav id='nav-nav'>
          <p className ='text-white pr-3'>UAN : (055) 111 111 123</p>
          {props.user.isLogin ? 
          <p className ='text-white pr-3'>{props.user.Profile.fname}</p> :
          <p id='nav-p' className ='text-white pr-3'><Link to='/login' id='nav-link'>LOGIN</Link></p>}
          {props.user.isLogin ?
          <p id='nav-p' onClick={props.logOut} className ='text-white pr-3'>LOGOUT</p> :
          <p id='nav-p' className ='text-white pr-3'><Link to='/register' id='nav-link'>SIGN UP</Link></p>}
          </nav>
    </div>
  );
}

export default Navigation;
