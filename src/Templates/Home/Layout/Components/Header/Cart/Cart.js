import React from 'react';
import './Cart.css'
import {Link} from 'react-router-dom';

function Cart(props) {
  const count = props.cart.length
  if(props.user.isLogin){
    return (
      <div>
        <Link to='/user'><p id='cart-p' onClick={() => props.routeMethod('cart')} className='btn btn-outline-dark cart-k-btn'>Cart ({count})</p></Link>
      </div>
    );

  } else {
    return (
      <div>
        <Link to='/'><p id='cart-p' onClick={() => props.routeMethod('cart')} className='btn btn-outline-dark cart-k-btn'>Cart ({count})</p></Link>
      </div>
    );

  }

}

export default Cart;
