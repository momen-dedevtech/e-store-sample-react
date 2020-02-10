import React from 'react';
import './Payment.css';

function Payment (){
    return (
        <div className="col-md-10 ml-auto mr-auto pay-k-container">
            <h2>Payment Methods</h2>
            <div className=''>
            <div className="accordion" id="payment">
                <div className="card">
                    <div className="card-header" id="pay1">
                    <h5 data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Meezan Bank
                    </h5>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="pay1" data-parent="#payment">
                    <div className="card-body">
                    <table className="table-sm table-borderless col-md-5">
                        <tbody>
                            <tr>
                            <th className='text-left' scope="row">Account No.:</th>
                            <td className='text-left'>12345677888</td>
                            </tr>
                            <tr>
                            <th className='text-left' scope="row">Account Title:</th>
                            <td className='text-left'>12345677888</td>
                            </tr>
                            <tr>
                            <th className='text-left' scope="row">IBAN:</th>
                            <td className='text-left'>12345677888</td>
                            </tr>
                            <tr>
                            <th className='text-left' scope="row">Branch Code:</th>
                            <td className='text-left'>12345677888</td>
                            </tr>
                            <tr>
                            <th className='text-left' scope="row">Branch Address:</th>
                            <td className='text-left'>12345677888</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="pay2">
                    <h5 className='collapsed' data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Easy Paisa
                    </h5>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="pay2" data-parent="#payment">
                    <div className="card-body">
                    <table className="table-sm table-borderless col-md-5">
                        <tbody>
                            <tr>
                            <th className='text-left' scope="row">Account No.:</th>
                            <td className='text-left'>12345677888</td>
                            </tr>
                            <tr>
                            <th className='text-left' scope="row">Account Title:</th>
                            <td className='text-left'>12345677888</td>
                            </tr>
                            <tr>
                            <th className='text-left' scope="row">IBAN:</th>
                            <td className='text-left'>12345677888</td>
                            </tr>
                            <tr>
                            <th className='text-left' scope="row">Branch Code:</th>
                            <td className='text-left'>12345677888</td>
                            </tr>
                            <tr>
                            <th className='text-left' scope="row">Branch Address:</th>
                            <td className='text-left'>12345677888</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header" id="pay3">
                    <h5 className='collapsed' data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Jazz Cash
                    </h5>
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="pay3" data-parent="#payment">
                    <div className="card-body">
                    <table className="table-sm table-borderless col-md-5">
                        <tbody>
                            <tr>
                            <th className='text-left' scope="row">Account No.:</th>
                            <td className='text-left'>12345677888</td>
                            </tr>
                            <tr>
                            <th className='text-left' scope="row">Account Title:</th>
                            <td className='text-left'>12345677888</td>
                            </tr>
                            <tr>
                            <th className='text-left' scope="row">IBAN:</th>
                            <td className='text-left'>12345677888</td>
                            </tr>
                            <tr>
                            <th className='text-left' scope="row">Branch Code:</th>
                            <td className='text-left'>12345677888</td>
                            </tr>
                            <tr>
                            <th className='text-left' scope="row">Branch Address:</th>
                            <td className='text-left'>12345677888</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

    );

}

export default Payment;