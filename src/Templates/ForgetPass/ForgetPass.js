import React from 'react';
import './ForgetPass.css';
import {Link} from 'react-router-dom';

function ForgetPass () {
    return (
        <div className='forget-k-container'>
            <div className='forget-b'>
                <div className="forget-main col-md-3 col-8 col-sm-6">
                    <div className='forget-form'>
                    <form id='forget-form'>
                        <h3>Forget Password</h3>
                        <br/>
                        <div className="form-group">
                            <label for="enterEmail">Email address</label>
                            <input type="email" required className="form-control" id="enterEmail" aria-describedby="emailHelp" placeholder="Email"/>
                        </div>
                        <div className="forget-k-link">
                            <button id='forget-btn' type="submit" className="btn btn-dark">Send Password</button>
                        </div>
                    </form>
                    </div>
                </div>
                <div className='forget-newUser col-md-3 col-8 col-sm-6'>
                    <p><Link id='forget-link' to='/login'>Back to Login</Link></p>
                </div>
            </div>
        </div>

    );

}

export default ForgetPass;