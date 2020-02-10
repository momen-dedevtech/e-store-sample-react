import React from 'react';
import pic from './img.jpg';
import qr from './qr.png';
import './Popup.css';

function Popup({orderId, time, pStatus, status, price, pList,i}){
    let productsTableData = null

    productsTableData = pList.map((pro,index) => {
                                                return <tr key={'proTablePopUp'+index}>
                                                        <th scope="row">{index+1}</th>
                                                        <td>{pro.name}</td>
                                                        <td>{pro.description}</td>
                                                        <td>{pro.price}</td>
                                                        <td>{pro.quantity}</td>
                                                        <td><img src={pic} alt='pic' height='50px' width='60px'/></td>
                                                        </tr>
})

    return (
        <div>
        {/* <!-- Modal --> */}
        <div className="modal fade" id={"orderpopup"+i} tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">ID # {orderId}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
            <div className="order-popup-k-container">
            <table className="table-sm table-borderless col-md-6">
                <tbody>
                    <tr>
                    <th className='text-left' scope="row">Order ID:</th>
                    <td className='text-left'>{orderId}</td>
                    </tr>
                    <tr>
                    <th className='text-left' scope="row">Total Price:</th>
                    <td className='text-left'>{price}</td>
                    </tr>
                    <tr>
                    <th className='text-left' scope="row">Placed On:</th>
                    <td className='text-left'>{time}</td>
                    </tr>
                    <tr>
                    <th className='text-left' scope="row">Payment:</th>
                    <td className='text-left'>{pStatus}</td>
                    </tr>
                    <tr>
                    <th className='text-left' scope="row">Status:</th>
                    <td className='text-left'>{status}</td>
                    </tr>
                </tbody>
                </table>
                <div>
                    <img src={qr} alt='qr' height='250px' width='250px' />
                </div>
                <table className="mt-2 table table-responsive-sm table-responsive-md">
                    <thead className='thead-dark'>
                        <tr>
                        <th scope="col">S.No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productsTableData}
                    </tbody>
                </table>
            </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>
        </div>
    );

}

export default Popup;