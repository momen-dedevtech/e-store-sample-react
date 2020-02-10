import React, { Component } from 'react';
import Home from './Home/Home';
import SignIn from './SignIn/SignIn';
import Register from './Register/Register';
import User from './User/User';
import ForgetPass from './ForgetPass/ForgetPass';
import ls from 'local-storage';
import server from 'axios';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {toast} from 'react-toastify'

const success = (msg) => toast.success(msg, {
  position: toast.POSITION.BOTTOM_RIGHT,
  className : 'toast-custom'

  });

const error = (msg) => toast.error(msg, {
  position: toast.POSITION.BOTTOM_RIGHT,
  className : 'toast-custom'

  });

class Main extends Component {
  constructor(){
    super()
    this.localUser = ls.get('User')
    this.localCart = ls.get('Cart')
    this.localRoute = ls.get('Route')
    this.state = {
      Cart : this.localCart || [],
      // Menu : [],
      // ProductsList : [],
      ProductsList : [{_id: 123, name : "Pizza Small", description : "Delicious", price: 9.99},
                      {_id: 456, name : "Pizza Medium", description : "Delicious", price: 12.99},
                      {_id: 789, name : "Pizza Large", description : "Delicious", price: 15.99},
                      {_id: 1011, name : "Pizza Xtra Large", description : "Delicious", price: 17.99},
                      {_id: 1213, name : "Pizza Family", description : "Delicious", price: 19.99}],
      User : this.localUser || {
        isLogin : false,
        email: '',
        password: '',
        Orders: [],
        Profile : ''
      },
      Route: this.localRoute || "home"
    }  
  }

  componentDidMount = ()=> {
   
  }

  userDashboardHandler(){
    if(this.state.User.isLogin){
      return <div><User route={this.state.Route}
                        routeMethod={(content) => this.routeHandler(content)} 
                        cart={this.state.Cart}
                        addCart={(item) => this.addToCartHandler(item)} 
                        updateCart={(obj) => this.updateInCartHandler(obj)} 
                        deleteCart={(item) => this.deleteFromCartHandler(item)} 
                        clearCart={this.clearCartHandler}
                        createOrder={(content) => this.createOrderHandler(content)}
                        orderList={this.state.User.Orders}
                        user={this.state.User}
                        updateProfile={(content) => this.updateProfileHandler(content)}
                        changePass={(content) => this.changePassHandler(content)}
                        logOut={this.logOutHandler}/></div>
    } else {
      return <Redirect to='/login' />
    }

  }

  signInPageHandler(){
    if(this.state.User.isLogin)
    return <Redirect to='/' />
    else
    return <div><SignIn user={this.state.User} routeMethod={(content) => this.routeHandler(content)} logIn={(user) => this.logInHandler(user)} /></div>
  }
    
  addToCartHandler(item){
    let currentCart = [...this.state.Cart]
    currentCart.push(item);
    this.setState({Cart : currentCart})

  }

  updateInCartHandler(obj){
    let currentCart = [...this.state.Cart]
    let newVal = obj.quantity
    let index = 0
    
    for(const i of currentCart){
      if(i._id === obj._id) break
      else index=index+1

     }
    currentCart[index].quantity = newVal
    this.setState({Cart : currentCart})

  }

  deleteFromCartHandler(item){
    let currentCart = [...this.state.Cart]
    let index = 0
    
    for(const i of currentCart){
      if(i._id === item._id) break
      else index=index+1

     }
    currentCart.splice(index,1)
    this.setState({Cart : currentCart})

  }

  clearCartHandler = () => {
    let tempCart = [...this.state.Cart]
    let cartLength = this.state.Cart.length
    if(cartLength > 0){
      tempCart.splice(0,cartLength)
      this.setState({Cart : tempCart})
      success('Success !')

    } 
  }

  routeHandler = (content)=>{
    let newRoute = this.state.Route;
    newRoute = content;
    this.setState({Route : newRoute})

  }

  logInHandler = (user) => {
    let e = user[0], p=user[1]
    if(this.state.User.email === e && this.state.User.password === p){
      let prevState = {...this.state.User}
      prevState.isLogin = true;
      this.setState({User : prevState})
      success('Login Success !')
    } else 
      error('Invalid Email or Password !')
    
  }

  logOutHandler = () => {
    let prevState = {...this.state.User}
    prevState.isLogin = false;
    prevState.Profile = '';
    prevState.email = '';
    prevState.password = '';
    prevState.Orders = '';
    prevState.Cart = [];
    prevState.Route = 'home';
    this.setState({User: prevState})

  }

  createOrderHandler = (order) => {
    let currentOrders = [...this.state.User.Orders]
    let currentCart = [...this.state.Cart]
    currentCart = []
    let currentUserState = {...this.state.User}
    currentOrders.push(order);
    currentUserState.Orders = currentOrders
    this.setState({User : currentUserState})
    this.setState({Cart : currentCart})
    success('Order Created Successfully !')

  }

  createUserHandler = (profile) => {
    let currentUser = {...this.state.User}
    currentUser.Profile = profile
    currentUser.email = profile.email
    currentUser.password = profile.pass
    this.setState({User : currentUser})

  }

  updateProfileHandler = (data) => {
    let newAddress = data[0]
    let newCity = data[1]
    let newCountry = data[2]
    let newProPic = data[3]
    let prevState = {...this.state.User}
    prevState.Profile.address = newAddress
    prevState.Profile.city = newCity
    prevState.Profile.country = newCountry
    prevState.Profile.image = newProPic
    this.setState({User: prevState})
    success("Profile Updated Successfully !")
  }

  changePassHandler = (pass) => {
    let oldState = {...this.state.User}
    oldState.Profile.pass = pass 
    oldState.password = pass 
    this.setState({User: oldState})
    success("Password Updated !")

  }

  static getDerivedStateFromProps = (nextProps,prevState) => {
    ls.set('User',prevState.User)
    ls.set('Cart',prevState.Cart)
    ls.set('Route',prevState.Route)
    return {

    }
  }

  render(){
    return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <div><Home  cart={this.state.Cart} 
                        user={this.state.User} 
                        route={this.state.Route}
                        routeMethod={(content) => this.routeHandler(content)}
                        productList={this.state.ProductsList}
                        addCart={(item) => this.addToCartHandler(item)} 
                        updateCart={(obj) => this.updateInCartHandler(obj)} 
                        deleteCart={(item) => this.deleteFromCartHandler(item)} 
                        clearCart={this.clearCartHandler} 
                        logOut={this.logOutHandler}/>
            </div>
          </Route>
          <Route exact path='/login'>
            {this.signInPageHandler()}
          </Route>  
          <Route exact path='/register'>
            <div><Register createUser={(content) => this.createUserHandler(content)}/></div>
          </Route>
          <Route path='/user'>
            {this.userDashboardHandler()}
          </Route>
          <Route exact path='/forget'>
            <div><ForgetPass /></div>
          </Route>
        </Switch>
      </Router>
    
    );
    
  }

  
  
}

export default Main;
