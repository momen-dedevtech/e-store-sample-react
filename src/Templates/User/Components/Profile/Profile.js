import React from 'react';
import img from './avator.png';
import './Profile.css';
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
    
let address='',city='',country='',proPic='';

const enableUpdateBtn = () => {
    if((address !== '') && (city !== '') && (country !== '')){
        $('#update-btn').attr('disabled',false)

    }

}

function update(){
$('#update-btn').ready(function (){
    if((address !== '') && (city !== '') && (country !== '')){
        $('#address').val(address)
        $('#city').val(city)
        $('#country').val(country)

    }

})
}
const k_validate_update = (id) => {
    $('#update-btn').attr('disabled',true)
    switch(id){
        case '#address':
            address = $(id).val()
            if(address === ''){
                $(id).css({'border-color':'red', 'border-width':'2px' })
                // $(id).focus()
                error("Please enter your postal address !")
            } else{
                $(id).css({'border-color':'green', 'border-width':'1px' })
                enableUpdateBtn();}
            break;
        case '#city':
            let validCity=null
            let regexCity = /^([a-zA-Z]{1,})$/
            city = $(id).val()
            validCity = regexCity.test(city)
            if(city === '' || !validCity){
                $(id).css({'border-color':'red', 'border-width':'2px' })
                // $(id).focus()
                error("Please enter valid city name !")
            } else {
                $(id).css({'border-color':'green', 'border-width':'1px' })
                enableUpdateBtn();}
            break;
        case '#country':
            let validCountry=null
            let regexCountry=/^([a-zA-Z]{1,})$/
            country = $(id).val()
            validCountry = regexCountry.test(country)
            if(country === '' || !validCountry){
                $(id).css({'border-color':'red', 'border-width':'2px' })
                // $(id).focus()
                error("Please enter valid country name !")
            } else {
                $(id).css({'border-color':'green', 'border-width':'1px' })
                enableUpdateBtn();}
            break;
        default:
            break;

    }
    
}

const profile_submit = (event) => {
    event.preventDefault();

}

function UserInfo (props) {
    let a=props.user.Profile.address,ct=props.user.Profile.city,cntry=props.user.Profile.country
    address =a; city =ct; country=cntry;
    update()
    return (
        <div className='profile-k-container'>
            <div className='profile-k-form col-md-10 col-sm-10'>
                <form onSubmit={profile_submit}>
                    <h2>Personal Information</h2>
                    <div className="form-group profile-k-end">
                        <img src={img} alt='profileImg' id="profileImg" width='130px' height='120px'/>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" className="form-control" id="firstName" disabled value={props.user.Profile.fname} placeholder="First name"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" className="form-control" id="lastName" disabled value={props.user.Profile.lname} placeholder="Last name"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="firstEmail">Email</label>
                            <input type="email" className="form-control" disabled value={props.user.Profile.email} id="firstEmail" placeholder="Email"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="mobNo">Mobile No.</label>
                            <input type="number" className="form-control" disabled value={props.user.Profile.mobNo} id="mobNo" placeholder="Mobile No."/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address*</label>
                        <input type="text" required className="form-control" id="address" onBlur={() => k_validate_update('#address')} placeholder="Address"/>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="city">City*</label>
                            <input type="text" required className="form-control" id="city" onBlur={() => k_validate_update('#city')} placeholder="City"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="country">Country*</label>
                            <input type="text" required className="form-control" id="country" onBlur={() => k_validate_update('#country')} placeholder="Country"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="rePass">Profile Picture</label>
                        <input type="file" onChange={(event) => proPic=event.target.value} name="myFile"/>
                        <small id="fileHelp" className="form-text text-muted">Optional : Max. 1Mb. (only .jpg)</small>
                    </div>
                    <div className="profile-k-link">
                        <button id='update-btn' type="submit" onClick={() => props.updateProfile([address,city,country,proPic])} className="btn btn-primary">Update Profile</button>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default UserInfo;