import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
//import axios from 'axios';
import "./App.css";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Signup from "./component/Signup";
import Userinfo from "./pages/userinfo";
import Editinfo from "./component/Editinfo";
// import { Welcomegreeting } from "./Components/welcomegreeting";

import HeaderComponent from "./component/HeaderComponent";
import ShoppingAPI from "./component/ShoppingAPI";

class App extends Component {
  state = {
    // logInLoading: false,
    // logInDone: false,
    // logInError: false,
    //
    // logOutLoading: false,
    // logOutDone: false,
    // logOutError: false,
    //
    // signUpLoading: false,
    // signUpDone: false,
    // signUpError: false,
    // // test: "되라 좀",
    // userInfo: {},
    isLoggedIn:false,

  };

  onSubmitForm = (e) => {
    e.preventDefault();
    this.setState({
      isLoggedIn:true,
    })
  }


  render() {
    const { isLoggedIn } = this.state;
    const {onSubmitForm} = this;

    // 20200708 일어나면 isLoggedIn true 조건으로 삼항연산자 써 볼 것.

    return (
      <div>
        <BrowserRouter>
          <div>
            {this.state.test}
            <Route exact path="/" render={()=> <Home isLoggedIn={isLoggedIn} onSubmit={onSubmitForm} />}/>
            <Route path="/main" component={Main} />

            <Route path="/signup" component={Signup} />
            <Route path="/mypage" component={Mypage} />

            <Route path="/userinfo" component={Userinfo} />

            {/*<Route path="/editinfo" component={Editinfo} />*/}
            {/*<Route exact path="/" component={Home} />    지웠   */}
          </div>
        </BrowserRouter>
        {/*<div className="HeaderComponent">*/}
        {/*  <HeaderComponent />*/}
        {/*</div>*/}
        {/*<div className="ShoppingAPI">*/}
        {/*  <ShoppingAPI />*/}
        {/*</div>*/}
      </div>
    );
  }
}

export default App;
