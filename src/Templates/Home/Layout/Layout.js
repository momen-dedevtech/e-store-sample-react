import React from 'react';
import Navigation from './Components/Navigation/navigation';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';


function Layout(props){
    return(
        <div>
            <div><Navigation user={props.user} logOut={props.logOut}/></div>
            <div><Header user={props.user} searchString={props.searchString} cart={props.cart} routeMethod={props.routeMethod} /></div>
            {props.children}
            <div><Footer /></div>
        </div>

    );

}

export default Layout;