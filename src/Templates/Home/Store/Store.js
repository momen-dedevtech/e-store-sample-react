import React from 'react';
import Slider from './Componenets/Slider/Slider'
import Menu from './Componenets/Menu/Menu'
import RouteNav from './Componenets/RouteNav/RouteNav'
import Products from './Componenets/Products/Products'

function Store(props) {
  return (
    <div>
        <div><Slider /></div>
        <div><Menu /></div>
        <div><RouteNav /></div>
        <div><Products productList={props.productList} 
                       addCart={props.addCart}
                       /></div>
    </div>
  
  );
}

export default Store;