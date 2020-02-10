import React from 'react';
import './SignIn.css';
import {Link} from 'react-router-dom';
import img from './logo.png'

function signInSubmit(event){
    event.preventDefault();

}

function SignIn (props) {
    let email=null,password=null;
    return (
        <div className='signin-k-container'>
            <div className='signin-b'>
                <div className="signin-main col-md-3 col-8 col-sm-6">
                    <img id='signin-logo' src={img} alt='logo' height='41px' width='132px'/>
                    <div className='signin-form'>
                    <form onSubmit={signInSubmit}>
                        <br/>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" required onChange={(event) => {email=event.target.value}} className="form-control" id="signInEmail" aria-describedby="emailHelp" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" required onChange={(event) => {password=event.target.value}} className="form-control" id="signInPass" placeholder="Password"/>
                        </div>
                        <div id='signin-div' className="signin-k-link">
                            <p><Link id='signin-link' to='/forget'>Forgot Password</Link></p>
                            <button type="submit" onClick={() => props.logIn([email,password])} className="btn btn-outline-dark">Sign In</button>
                        </div>
                    </form>
                    </div>
                </div>
                <div className='signin-newUser col-md-3 col-8 col-sm-6'>
                    <p><Link id='signin-link' to='/register'>Create New Account</Link></p>
                </div>
                <br/>
                <Link to='/'><button onClick={() => props.routeMethod('store')} className="btn btn-outline-light">Back to Store</button></Link>
            </div>
        </div>

    );

}

export default SignIn;