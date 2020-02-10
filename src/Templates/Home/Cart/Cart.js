import React from 'react';
import Popup from './Components/Popup/Popup';
import pic from './Components/Popup/img.jpg';
import './Cart.css';
import {Link} from 'react-router-dom';

function Cart (props) {
    let cartItems = props.cart;
    let tableData = null;
    let popUpData = null;
    let shippingCost = 250;
    let totalCost = 0;
    if(cartItems.length === 0) {
        tableData = <tr id='cart-row'>
                    <th colSpan="7" scope="row" className="text-center">Your cart is Empty.</th>
                    </tr>

    } else {
        popUpData = cartItems.map(product => {
                                            return <Popup name={product.name} 
                                                            productId={product._id} 
                                                            price={product.price} 
                                                            description={product.description} 
                                                            updateCart={props.updateCart}
                                                            deleteCart={props.deleteCart}
                                                            key={'cartpopup'+product._id} 
                                                            stock='10'/>
                                            })
        tableData = cartItems.map((product,index) => {
                                            return <tr id='cart-row' 
                                                        data-toggle="modal" 
                                                        data-target={"#popupprocart"+product._id}
                                                        key={'cartrow'+product._id}>
                                                        <th scope="row">{index+1}</th>
                                                        <td>{product._id}</td>
                                                        <td><img src={pic} alt='pic' height='50px' width='60px'/></td>
                                                        <td>{product.name}</td>
                                                        <td>{product.description}</td>
                                                        <td>{product.quantity}</td>
                                                        <td>{product.price}</td>
                                                    </tr>
                                                })

    }
    let cost = 0;
    for(const i of cartItems){
        cost = cost + (i.quantity*i.price)

    }

    totalCost = cost + shippingCost

    return (
        <div className='cart-k-container'>
            <div className='cart-k-table col-md-10 col-sm-10 table-responsive-sm'>
            <h2>Your Cart</h2>
            {popUpData}
            <table className="table table-hover">
            <thead className='thead-dark'>
                <tr>
                <th scope="col">S.No.</th>
                <th scope="col">ID #</th>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                {tableData}
                <tr id='cart-row'>
                <th colSpan="6" scope="row" className="text-right">Shipping (All Over Pakistan)</th>
                <td>{shippingCost}</td>
                </tr>
                <tr id='cart-row'>
                <th colSpan="6" scope="row" className="text-right">Total Price</th>
                <td>{totalCost.toFixed(2)}</td>
                </tr>
            </tbody>
            </table>
            <div className="cart-k-btn">
                <button type="button" onClick={() => props.route('store')} className="btn btn-dark">Back to Store</button>
                <button type="button" onClick={props.clearCart} className="btn btn-secondary ml-2">Clear Cart</button>
                <Link to='/user'><button onClick={() => props.route('cart')} type="button" className="btn btn-primary ml-2">Checkout</button></Link>
            </div>
            </div>
        </div>
    );

}

export default Cart;