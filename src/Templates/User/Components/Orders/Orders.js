import React from 'react';
import Popup from './Components/Popup/Popup';
import './Orders.css';

function Orders (props) {
    let oList = props.orderList;
    let orderTable = null;
    let orderPopUp = null;

    if(oList.length === 0) {
        orderTable = <tr id='orders-cart-row'>
                    <th colSpan="7" scope="row" className="text-center">None order is placed at that moment.</th>
                    </tr>

    } else {

        orderPopUp = oList.map((order,index) => {
                                            return <Popup orderId={order[0]} 
                                                        time={order[1]} 
                                                        pStatus={order[2]} 
                                                        status={order[3]}
                                                        price={'$'+order[4]} 
                                                        pList={order[5]}
                                                        i={index}
                                                        key={'orderspopup'+index}/> 
                                            })
        orderTable = oList.map((order,index) => {
                                            return <tr id='orders-row' 
                                                        // data-toggle="modal" 
                                                        // data-target={"#orderpopup"+index}
                                                        key={'ordersrow'+index}>
                                                        <th scope="row">{index+1}</th>
                                                        <td>{order[0]}</td>
                                                        <td>{'$'+order[4]}</td>
                                                        <td>{order[1]}</td>
                                                        <td>{order[2]}</td>
                                                        <td>{order[3]}</td>
                                                        <td><button className='btn btn-dark k-btn-order' data-toggle='modal' data-target={"#orderpopup"+index}>Details</button></td>
                                                    </tr>
                                                })

    }    

    return (
        <div className='orders-k-container'>
            <div className='orders-k-table col-md-10 col-sm-10 table-responsive-sm'>
            <h2>Orders</h2>
            {orderPopUp}
            <table className="table table-hover">
            <thead className='thead-dark'>
                <tr>
                <th scope="col">S.No.</th>
                <th scope="col">ID #</th>
                <th scope="col">Price</th>
                <th scope="col">Timestamp</th>
                <th scope="col">Payment</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {orderTable}
            </tbody>
            </table>
        </div>
        </div>
    );

}

export default Orders;