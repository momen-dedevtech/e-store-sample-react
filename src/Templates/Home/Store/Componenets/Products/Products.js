import React from 'react';
import Cards from './Cards/Cards';
import img from './Cards/testimg.jpg';
import './Products.css'

function Products (props) {
    const list = props.productList;
    let plist = null;
    if(list.length === 0) plist = "Sorry No Product Found !"
    plist = list.map(items => {
        return <Cards key={items._id}
                p_id = {items._id}
                p_src={img} 
                p_alt={'img of '+items.name} 
                p_name={items.name} 
                p_des={items.description} 
                p_price={items.price}
                addCart={props.addCart}
                />
    })
    
    return (
        <div>
            <div className='list'>
                {plist}
            </div>
        </div>
    );

}

export default Products;