import React from 'react';
import Logo from './logo.png';
import {Link} from 'react-router-dom'
import './Header.css'

function Navigation (props) {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light pt-3">
            <div className="navbar-brand">
                <img src={Logo} width="135" height="41" alt="logo"/>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {props.route === 'order' ? 
                    <li className="nav-item active"> 
                        <p id='bold' className="nav-link">Order</p>
                    </li> : 
                    <li className="nav-item">
                        <p id='bold' onClick={() => props.routeMethod('order')} className="nav-link">Order</p>
                    </li>}
                    {props.route === 'cart' ? 
                    <li className="nav-item active"> 
                        <p id='bold' className="nav-link">Cart</p>
                    </li> : 
                    <li className="nav-item">
                        <p id='bold' onClick={() => props.routeMethod('cart')} className="nav-link">Cart</p>
                    </li>}
                    {props.route === 'changePass' || props.route === 'payment' || props.route === 'profile' ? 
                    <li className="nav-item dropdown">
                        <p className="k-bold nav-link dropdown-toggle active" id="navbarDropdown" role="button" data-toggle="dropdown">
                        {props.user.Profile.fname}
                        </p>
                        <div className="dropdown-menu">
                            <p onClick={() => props.routeMethod('profile')} className="dropdown-item">Profile</p>
                            <p onClick={() => props.routeMethod('payment')} className="dropdown-item">Payment Options</p>
                            <p onClick={() => props.routeMethod('changePass')} className="dropdown-item">Change Password</p>
                        <div className="dropdown-divider"></div>
                            <p onClick={props.logOut} className="dropdown-item">Logout</p>
                        </div>
                    </li> : 
                    <li className="nav-item dropdown">
                    <p className="k-bold nav-link dropdown-toggle" id="navbarDropdown bold" role="button" data-toggle="dropdown">
                    {props.user.Profile.fname}
                    </p>
                    <div className="dropdown-menu">
                        <p onClick={() => props.routeMethod('profile')} className="dropdown-item">Profile</p>
                        <p onClick={() => props.routeMethod('payment')} className="dropdown-item">Payment Options</p>
                        <p onClick={() => props.routeMethod('changePass')} className="dropdown-item">Change Password</p>
                    <div className="dropdown-divider"></div>
                        <p onClick={props.logOut} className="dropdown-item">Logout</p>
                    </div>
                    </li>}
                </ul>
                <div className="nav-item">
                    <Link to='/'><p onClick={() => props.routeMethod('store')} className="nav-link">Back to Store</p></Link>
                </div>
            </div>
        </nav>
        {props.children}
        </div>

    );

}

export default Navigation;
                