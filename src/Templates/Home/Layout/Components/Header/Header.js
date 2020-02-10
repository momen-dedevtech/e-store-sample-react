import React from 'react';
import Logo from './Logo/Logo';
import SearchBox from './SearchBox/SearchBox';
import './Header.css';
import Cart from './Cart/Cart';
import User from './User/User';

function Header(props) {
  return (
    <div className='mt-4 mb-4 k-block justify-content-center align-items-center'>
       <div className='col-md-3 col-12 col-sm-3'><Logo /></div>
       <div className='col-md-5 col-12 col-sm-3'><SearchBox searchString={props.searchString} /></div>
       <div id='cart' className='col-md-2 col-6 col-sm-3'><Cart user={props.user} cart={props.cart} routeMethod={props.routeMethod}/></div>
       <div id='cart' className='col-md-2 col-6 col-sm-3'><User routeMethod={props.routeMethod}/></div>
    </div>
  );
}

export default Header;