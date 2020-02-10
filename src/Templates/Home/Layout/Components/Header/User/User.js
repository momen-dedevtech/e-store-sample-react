import React from 'react';
import './User.css'
import {Link} from 'react-router-dom';

function User(props) {
  return (
    <div>
      <Link to='/user' id='user-link'><p onClick={() => props.routeMethod('order')} id='user-p' className='btn btn-outline-dark user-k-btn'>Account</p></Link>
    </div>
  );
}

export default User;
