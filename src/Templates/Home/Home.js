import React, { Component } from 'react';
import Layout from './Layout/Layout';
import Store from './Store/Store';
import Cart from './Cart/Cart';
import Payment from './Payment/Payment';

class Home extends Component {
  state = {
    Route : 'store',
    FilterProducts : this.props.productList

  }

  static getDerivedStateFromProps(nextProps,prevState){
    switch(nextProps.route){
      case 'cart':
        return {Route: 'cart'}
      default:
        return {Route:'store'}

    }

  }

  searchStringHandler = (event) => {
    let keyword = event.target.value
    let filterPro = []
    for (const i of this.props.productList){
      if( i.name.toLowerCase().includes(keyword.toLowerCase()) ) filterPro.push(i)

    }
    this.setState({FilterProducts : filterPro})

  }

  render(){
    let home_out = null;
    switch(this.state.Route){
      case 'payment':
        home_out = <div><Payment /></div>
        break;
      case 'cart':
        home_out = <div><Cart cart={this.props.cart} 
                              route={this.props.routeMethod}
                              clearCart={this.props.clearCart}
                              updateCart={this.props.updateCart}
                              deleteCart={this.props.deleteCart}
                              /></div>
        break;
      default:
        home_out = <div><Store productList={this.state.FilterProducts} 
                          addCart={this.props.addCart}
                          /></div>
        break;
          
      }

    return (
      <div>
        <Layout cart={this.props.cart} 
                searchString={this.searchStringHandler} 
                routeMethod={this.props.routeMethod}
                user={this.props.user} 
                logOut={this.props.logOut}>
          
          {home_out}
        
        </Layout>
      </div>
    
    );
  }

}
export default Home;