import React from 'react';
import pic from './img.jpg';
import './Details.css';
import {toast} from 'react-toastify';

const notification = () => toast.success("Added to Cart Successfully !", {
    position: toast.POSITION.BOTTOM_RIGHT,
    className : 'toast-custom'

    });

function Details({productId, price, name, description, stock, addCart}){
    let newQuantity = 1;
    return (
        <div>
        {/* <!-- Modal --> */}
        <div className="modal fade" id={"popuppro"+productId} tabIndex="-1" role="dialog" aria-labelledby="popuppro" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{name}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
            <div id="store-details-k-container">
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
                        <div className='store-details-k-field'><select onChange={(event) => newQuantity=parseInt(event.target.value)} className="form-control" id="quantitySelect">
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
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
                    <p className="nav-link active" data-toggle="tab" data-target={"#des"+productId} role="tab">Description</p>
                </li>
                <li className="nav-item">
                    <p className="nav-link" data-toggle="tab" data-target={"#specs"+productId} role="tab">Specification</p>
                </li>
                <li className="nav-item">
                    <p className="nav-link" data-toggle="tab" data-target={"#review"+productId} role="tab">Review & Rating</p>
                </li>
                </ul>

                {/* <!-- Tab panes --> */}
                <div className="tab-content">
                    <div className="tab-pane active" id={"des"+productId} role="tabpanel">{description}</div>
                    <div className="tab-pane text-center" id={"specs"+productId} role="tabpanel">No Specs Available at that moment.</div>
                    <div className="tab-pane text-center" id={"review"+productId} role="tabpanel">Not Available at that moment.</div>
                </div>
            </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" 
                        onClick={() => {notification();addCart({_id: productId, name : name, description : description, price: price, quantity: newQuantity})}} 
                        className="btn btn-primary" 
                        data-dismiss="modal">Add to Cart</button>
            </div>
            </div>
        </div>
        </div>
        </div>
    );

}

export default Details;