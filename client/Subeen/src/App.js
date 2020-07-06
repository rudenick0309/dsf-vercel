import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, BrowserRouter } from 'react-router-dom';
//import axios from 'axios';
import './App.css';
import Home from './pages/Home'
import Main from './pages/Main'
import Mypage from './pages/Mypage'
import Signup from './Components/Signup'
import Userinfo from './pages/userinfo';
import Editinfo from './Components/Editinfo'
import { Welcomegreeting } from './Components/welcomegreeting'

class App extends Component {

state = {
  logInLoading: false,
  logInDone: false, 
  logInError: false,

  logOutLoading: false,
  logOutDone: false, 
  logOutError: false,

  signUpLoading: false,
  signUpDone: false, 
  signUpError: false,

  userInfo: {}
};


render(){
  //const { logInDone, userInfo } = this.state;
  return (
    <div>
   
    <BrowserRouter>
    
    <div>
      <Route exact path = '/' component = {Home} />
      <Route path = '/home' component = {Home} />
      <Route path = '/signup' component = {Signup} />
      <Route path = '/main' component = {Main} />
      <Route path = '/mypage' component = {Mypage} />
      <Route path = '/userinfo' component = {Userinfo} />
      <Route path = '/editinfo' component = {Editinfo} />

    </div>
    </BrowserRouter>


    </div>
    )
  }
}

export default App;

