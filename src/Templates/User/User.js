import React, { Component } from 'react';
import Header from './Header/Header';
import Orders from './Components/Orders/Orders';
import ChangePass from './Components/ChangePassword/ChangePass';
import Profile from './Components/Profile/Profile';
import Cart from './Components/Cart/Cart';
import Payment from './Components/Payment/Payment';

class User extends Component {
  state = {
      Route : 'order'
  
    }

  static getDerivedStateFromProps(nextProps,prevState){
    switch(nextProps.route){
      case 'order':
        return {Route: 'order'}
      case 'cart':
        return {Route: 'cart'}
      case 'profile':
        return {Route: 'profile'}
      case 'changePass':
        return {Route: 'changePass'}
      case 'payment':
        return {Route: 'payment'}
      default:
        return {Route:'order'}

    }

  }
  
  render(){
      let user_out = null;
      switch(this.state.Route){
          case 'payment':
            user_out = <div><Payment /></div>
            break;
          case 'cart':
            user_out = <div><Cart route={this.props.routeMethod}
                                  cart={this.props.cart}
                                  addCart={this.props.addCart}
                                  updateCart={this.props.updateCart} 
                                  deleteCart={this.props.deleteCart} 
                                  clearCart={this.props.clearCart} 
                                  createOrder={this.props.createOrder}/></div>
            break;
          case 'profile':
            user_out = <div><Profile user={this.props.user} updateProfile={this.props.updateProfile}/></div>
            break;
          case 'changePass':
            user_out = <div><ChangePass user={this.props.user} changePass={this.props.changePass}/></div>
            break;
          default:
            user_out = <div><Orders orderList={this.props.orderList}/></div>
            break;
              
          }

      return (
          <div>
              <Header route={this.props.route} 
                      routeMethod={this.props.routeMethod}
                      user={this.props.user} 
                      logOut={this.props.logOut}>
                  
                  {user_out}
              
              </Header>
          </div>

      );  
  }
}

export default User;