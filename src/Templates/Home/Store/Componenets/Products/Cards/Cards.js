import React from 'react';
import './Cards.css'
import Details from '../Details/Details';
import {toast} from 'react-toastify';

const notification = () => toast.success("Added to Cart Successfully !", {
    position: toast.POSITION.BOTTOM_RIGHT,
    className : 'toast-custom'

    });

function Cards ({p_id, p_src, p_alt, p_name, p_des, p_price, addCart}) {
    return(
        <div className="flip-card">
            <Details name={p_name} 
                     productId={p_id} 
                     price={p_price} 
                     description={p_des} 
                     stock='10' 
                     addCart={addCart} 
                    />
            <div className="flip-card-inner">
                <div className="flip-card-front">
                     <img id='productImg' src={p_src} alt={p_alt}/>
                </div>
                <div className="flip-card-back">
                    <div className='productDetails'>
                        <h3>{p_name}</h3> 
                        <p>{p_des}</p> 
                        <h4>{'$'+p_price}</h4>
                        <div className="k-btn-container">
                            <button type="button" className='btn btn-secondary k-btn-size' data-toggle="modal" data-target={"#popuppro"+p_id}>Details</button>
                            <br/>
                            <button onClick={() => {notification();addCart({_id: p_id, name : p_name, description : p_des, price: p_price, quantity: 1})}} 
                                    className='btn mt-2 btn-primary k-btn-size'>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
