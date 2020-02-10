import React from 'react';
import pic from './img.jpg';
import './Popup.css';
import {toast} from 'react-toastify';

const updateToast = () => toast.success("Cart updated Successfully !", {
    position: toast.POSITION.BOTTOM_RIGHT,
    className : 'toast-custom'

    });

const deleteToast = () => toast.error("Deleted from Cart Successfully !", {
    position: toast.POSITION.BOTTOM_RIGHT,
    className : 'toast-custom'

    });

function PopupPro({productId, price, name, description, updateCart, deleteCart, stock}){
    let user_cart_popup_newQuantity = 1;
    return (
        <div>
        {/* <!-- Modal --> */}
        <div className="modal fade" id={"userpopupprocart"+productId} tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{name}</h5>
                <button type="button" className="close" data-dismiss="modal">
                <span>&times;</span>
                </button>
            </div>
            <div className="modal-body">
            <div className="user-cart-k-container">
                <table className="table-sm table-borderless col-md-6">
                    <tbody>
                        <tr>
                        <th className='text-left' scope="row">Product ID:</th>
                        <td className='text-left'>{productId}</td>
                        </tr>
                        <tr>
                        <th className='text-left' scope="row">Name:</th>
                        <td className='text-left'>{name}</td>
                        </tr>
                        <tr>
                        <th className='text-left' scope="row">Price:</th>
                        <td className='text-left'>{'$'+price}</td>
                        </tr>
                        <tr>
                        <th className='text-left' scope="row">Quantity:</th>
                        <td className='text-left'>
                        <div className='user-cart-k-field'><select onChange={(event) => user_cart_popup_newQuantity=parseInt(event.target.value)} className="form-control" id={"quantity"+productId}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select></div></td>
                        </tr>
                        <tr>
                        <th className='text-left' scope="row">Total Stock:</th>
                        <td className='text-left'>{stock}</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <img src={pic} alt='productimg' width='350px' height='250px'/>
                </div>
            </div>
            <div className="mt-4">
                {/* <!-- Nav tabs --> */}
                <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                    <p className="nav-link active" data-toggle="tab" data-target={"#u_description"+productId} role="tab">Description</p>
                </li>
                <li className="nav-item">
                    <p className="nav-link" data-toggle="tab" data-target={"#u_specs"+productId} role="tab">Specification</p>
                </li>
                <li className="nav-item">
                    <p className="nav-link" data-toggle="tab" data-target={"#u_review"+productId} role="tab">Review & Rating</p>
                </li>
                </ul>

                {/* <!-- Tab panes --> */}
                <div className="tab-content">
                    <div className="tab-pane active" id={"u_description"+productId} role="tabpanel">{description}</div>
                    <div className="tab-pane text-center" id={"u_specs"+productId} role="tabpanel">No Specs available for this product at the moment.</div>
                    <div className="tab-pane text-center" id={"u_review"+productId} role="tabpanel">Not available for this product at the moment.</div>
                </div>
            </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-danger" onClick={() => {deleteToast();deleteCart({_id:productId})}} data-dismiss="modal">Remove from Cart</button>
                <button type="button" className="btn btn-primary" onClick={() => {updateToast();updateCart({_id:productId, quantity:user_cart_popup_newQuantity})}} data-dismiss="modal">Save Changes</button>
            </div>
            </div>
        </div>
        </div>
        </div>
    );

}

export default PopupPro;