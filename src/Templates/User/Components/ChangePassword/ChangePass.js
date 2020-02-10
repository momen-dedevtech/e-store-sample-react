import React from 'react';
import './ChangePass.css';
import $ from 'jquery'
import {toast} from 'react-toastify'

const error = (msg) => toast.error(msg, {
    position: toast.POSITION.TOP_CENTER,
    className : 'toast-custom'

    });
    
let oldpass='', oldpassinput='',newpass='',newpassre='';

const enableChangePassBtn = () => {
    if((oldpassinput !== '') && (newpass !== '') && (newpassre !== '')){
        $('#changePass-btn').attr('disabled',false)

    }

}

function changePassSubmit(event){
    event.preventDefault();
    oldpassinput='';newpass='';newpassre='';
    $('#inputOldPass').val('')
    $('#inputNewPass').val('')
    $('#inputNewPassRe').val('')
    $('#changePass-btn').attr('disabled',true)
    $('#inputNewPass').attr('disabled',true)
    $('#inputNewPassRe').attr('disabled',true)

}

function changePass_fields(){
    $('#changePass-btn').ready(function (){
        $('#changePass-btn').attr('disabled',true)
        $('#inputNewPass').attr('disabled',true)
        $('#inputNewPassRe').attr('disabled',true)

    })

}

const k_validate_changePass = (id) => {
    switch(id){
        case '#inputOldPass':
            oldpassinput = $(id).val()
            if(oldpassinput === ''){
                $(id).css({'border-color':'red', 'border-width':'2px' })
                // $(id).focus()
                error("Enter old password !")
            } else if (oldpassinput !== oldpass){
                $(id).css({'border-color':'red', 'border-width':'2px' })
                // $(id).focus()
                error("Invalid Password !")
            } else{
                $(id).css({'border-color':'green', 'border-width':'1px' })
                $('#inputNewPass').attr('disabled',false)
                enableChangePassBtn();
            }
            break;
        case '#inputNewPass':
            let validNewPass=null
            let regexNewPass=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*.,])([a-zA-Z0-9!@#$%^&*.,]{8,})$/
            newpass = $(id).val()
            validNewPass = regexNewPass.test(newpass)
            if(newpass === '' || !validNewPass){
                $(id).css({'border-color':'red', 'border-width':'2px' })
                // $(id).focus()
                error("At least 8 digit long must contain digit, lower case, upper case and special character")
            } else {
                $(id).css({'border-color':'green', 'border-width':'1px' })
                $('#inputNewPassRe').attr('disabled',false)
                enableChangePassBtn();}
            break;
        case '#inputNewPassRe':
            newpassre = $(id).val()
            if(newpassre === '' || (newpassre !== newpass)){
                $(id).css({'border-color':'red', 'border-width':'2px' })
                error("Password Mistached !")
            } else{
                $(id).css({'border-color':'green', 'border-width':'1px' })
                enableChangePassBtn();}
            break;
        default:
            break;

    }
    
}

function ChangePass (props) {
    let opass = props.user.Profile.pass;
    oldpass = opass;
    changePass_fields()
    return (
        <div className='changePass-k-container'>
            <div className='changePass-k-form col-md-4 col-sm-8'>
                <form onSubmit={changePassSubmit}>
                    <h2 className='text-center'>Change Password</h2>
                    <div className="form-group mt-4">
                        <input type="password" onBlur={() => k_validate_changePass('#inputOldPass')} className="form-control" id="inputOldPass" placeholder="Old Password"/>
                    </div>
                    <div className="form-group mt-4">
                        <input type="password" onBlur={() => k_validate_changePass('#inputNewPass')} className="form-control" id="inputNewPass" placeholder="New Password"/>
                    </div>
                    <div className="form-group">
                        <input type="password" onBlur={() => k_validate_changePass('#inputNewPassRe')} className="form-control" id="inputNewPassRe" placeholder="Confirm New Password"/>
                    </div>
                    <div className="changePass-k-link">
                        <button id='changePass-btn' type="submit" onClick={() => props.changePass(newpassre)} className="btn btn-primary">Change Password</button>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default ChangePass;