import React from 'react';
import './Register.css';
import {Link} from 'react-router-dom';
import $ from 'jquery'
import {toast} from 'react-toastify'

const success = (msg) => toast.success(msg, {
    position: toast.POSITION.BOTTOM_RIGHT,
    className : 'toast-custom'

    });

const error = (msg) => toast.error(msg, {
    position: toast.POSITION.TOP_CENTER,
    className : 'toast-custom'

    });
    
let fname='',lname='',email='',reemail='',pass='',repass='',mob='';
const enableBtn = () => {
    if((fname !== '') && (email !== '') && (reemail !== '') && (pass !== '') && (repass !== '') && (mob !== '')){
        $('#register-btn').attr('disabled',false)

    }

}

function registerSubmit(event){
    event.preventDefault();

}

function update_register(){
$('#register-btn').ready(function (){
    $('#register-btn').attr('disabled',true)

})
}

const k_validate_register = (id) => {
    switch(id){
        case '#firstName':
            let validName=null
            let regexName=/^([a-zA-Z]{1,})$/
            fname = $(id).val()
            validName = regexName.test(fname)
            if(fname === ''){
                $(id).css({'border-color':'red', 'border-width':'2px' })
                // $(id).focus()
                error("Please enter your First Name !")
            } else if (!validName){
                $(id).css({'border-color':'red', 'border-width':'2px' })
                // $(id).focus()
                error("Please enter valid Name !")
            } else{
                $(id).css({'border-color':'green', 'border-width':'1px' })
                enableBtn();}
            break;
        case '#lastName':
            let validLastName=null
            let regexLastName=/^([a-zA-Z]{0,})$/
            lname = $(id).val()
            validLastName = regexLastName.test(lname)
            if (!validLastName){
                $(id).css({'border-color':'red', 'border-width':'2px' })
                // $(id).focus()
                error("Please enter valid Name !")
            } else
                $(id).css({'border-color':'green', 'border-width':'1px' })
            break;
        case '#firstEmail':
            let validFirstEmail=null
            let regexFirstEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            email = $(id).val()
            validFirstEmail = regexFirstEmail.test(email)
            if(email === '' || !validFirstEmail){
                $(id).css({'border-color':'red', 'border-width':'2px' })
                // $(id).focus()
                error("Please enter valid email !")
            } else {
                $(id).css({'border-color':'green', 'border-width':'1px' })
                enableBtn();}
            break;
        case '#reEmail':
            let validReEmail=null
            let regexReEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            reemail = $(id).val()
            validReEmail = regexReEmail.test(reemail)
            if(reemail === '' || !validReEmail ){
                $(id).css({'border-color':'red', 'border-width':'2px' })
                // $(id).focus()
                error("Please enter valid email !") 
            } else if (reemail !== email) {
                $(id).css({'border-color':'red', 'border-width':'2px' })
                error("Email Mismatched !")
            } else{
                $(id).css({'border-color':'green', 'border-width':'1px' })
                enableBtn();}
            break;
        case '#Pass':
            let validPass=null
            let regexPass=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*.,])([a-zA-Z0-9!@#$%^&*.,]{8,})$/
            pass = $(id).val()
            validPass = regexPass.test(pass)
            if(pass === '' || !validPass){
                $(id).css({'border-color':'red', 'border-width':'2px' })
                // $(id).focus()
                error("At least 8 digit long must contain digit, lower case, upper case and special character")
            } else {
                $(id).css({'border-color':'green', 'border-width':'1px' })
                enableBtn();}
            break;
        case '#rePass':
            repass = $(id).val()
            if(repass === '' || (repass !== pass)){
                $(id).css({'border-color':'red', 'border-width':'2px' })
                error("Password Mistached !")
            } else{
                $(id).css({'border-color':'green', 'border-width':'1px' })
                enableBtn();}
            break;
        case '#mobNo':
            let validNo=null
            let regexNo=/^([0-9]{11})$/
            mob = $(id).val()
            validNo = regexNo.test(mob)
            if(mob === '' || !validNo){
                $(id).css({'border-color':'red', 'border-width':'2px' })
                // $(id).focus()
                error("Invalid Mobile No.")
            } else {
                $(id).css({'border-color':'green', 'border-width':'1px' })
                enableBtn();}
            break;
        default:
            break;

    }
    
}

function Register (props) {
    let pic=null;
    update_register()
    return (
        <div className='register-b'>
        <div className="register-main col-md-6">
            <div className='register-form'>
            <form id='register-form' autoComplete='off' onSubmit={() => registerSubmit()}>
                <h3>Customer Registration</h3>
                <br/>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="firstName">First Name*</label>
                        <input type="text" onChange={() => k_validate_register('#firstName')} className="form-control" id="firstName" required placeholder="First name"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" onBlur={() => k_validate_register('#lastName')} className="form-control" id="lastName" placeholder="Last name"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="firstEmail">Email*</label>
                        <input type="email" required onBlur={() => k_validate_register('#firstEmail')} className="form-control" id="firstEmail" placeholder="Email"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="reEmail">Confirm Email*</label>
                        <input type="email" required onBlur={() => k_validate_register('#reEmail')} className="form-control" id="reEmail" placeholder="Confirm Email"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="Pass">Password*</label>
                        <input type="password" required onBlur={() => k_validate_register('#Pass')} className="form-control" id="Pass" placeholder="Password"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="rePass">Confirm Password*</label>
                        <input type="password" required onBlur={() => k_validate_register('#rePass')} className="form-control" id="rePass" placeholder="Confirm Password"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="mobNo">Mobile No.*</label>
                        <input type="text" required onBlur={() => k_validate_register('#mobNo')} className="form-control" id="mobNo" placeholder="Mobile No."/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="rePass">Profile Picture</label>
                        <input type="file" onChange={(event) => pic=event.target.value} name="myFile" accept="image/.jpg"/>
                        <small id="fileHelp" className="form-text text-muted">Optional : Max. 1Mb. (only .jpg)</small>
                    </div>
                </div>
                <div id='register-div' className="register-k-link">
                    <p><Link id='register-link' to='/login'>Already Have Account. Sign In ?</Link></p>
                    <Link to='/login'><button type="submit" onClick={() => {success("Congratulations !");props.createUser({   fname : fname, 
                                                                                                lname : lname, 
                                                                                                email : email, 
                                                                                                pass : pass,
                                                                                                mobNo : mob, 
                                                                                                image : pic, 
                                                                                                address : '', 
                                                                                                city : '', 
                                                                                                country : '', 
                                                                                                role : "customer" })}} 
                                                className="btn btn-outline-dark" id='register-btn'>
                    Create New Account</button></Link>
                </div>
            </form>
            </div>
        </div>
        </div>

    );

}

export default Register;