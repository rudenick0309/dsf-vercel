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
import Signup from "./Component/Signup";
import Userinfo from "./pages/userinfo";
import Editinfo from "./Component/Editinfo";
// import { Welcomegreeting } from "./Components/welcomegreeting";

import HeaderComponent from "./Component/HeaderComponent";
import ShoppingAPI from "./Component/ShoppingAPI";

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
    // test: "되라 좀",
    userInfo: {},
  };

  render() {
    //const { logInDone, userInfo } = this.state;
    return (
      <div>
        <BrowserRouter>
          <div>
            {this.state.test}
            <Route path="/home" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/mypage" component={Mypage} />
            <Route path="/main" component={Main} />
            <Route path="/userinfo" component={Userinfo} />
            <Route path="/editinfo" component={Editinfo} />
            <Route exact path="/" component={Home} />
          </div>
        </BrowserRouter>
        <div className="HeaderComponent">
          <HeaderComponent />
        </div>
        <div className="ShoppingAPI">
          <ShoppingAPI />
        </div>
      </div>
    );
  }
}

export default App;
