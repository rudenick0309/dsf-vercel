import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  BrowserRouter,
} from "react-router-dom";
//import axios from 'axios';
import "./App.css";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Signup from "./component/Signup";
import Userinfo from "./pages/userinfo";
// import Editinfo from "./component/Editinfo";
// import { Welcomegreeting } from "./Components/welcomegreeting";

import HeaderComponent from "./component/HeaderComponent";
import ShoppingAPI from "./component/ShoppingAPI";

class App extends Component {
  state = {
    isLoggedIn: false,
  };

  onSubmitForm = (e) => {
    e.preventDefault();













    this.setState({
      isLoggedIn: true,
    });
  };


  render() {
    const {isLoggedIn} = this.state;
    const {onSubmitForm} = this;
    console.log("App 컴포넌트 : ", isLoggedIn);

    return (
      <div>

        <BrowserRouter>
          <div>

            {/*{this.state.test}*/}
            {/*<Route path="/home" component={Home} />*/}
            <Route path="/signup" component={Signup} />
            <Route path="/mypage" component={Mypage} />
            <Route path="/main" render={() => <Main isLoggedIn={isLoggedIn} />}/>
            <Route path="/userinfo" component={Userinfo} />
            {/*<Route path="/editinfo" component={Editinfo} />*/}
            <Route path="/home" render={() => <Home isLoggedIn={isLoggedIn} onSubmit={onSubmitForm}/>}/>

            <Route
              path="/"
              render={() => {
                if (isLoggedIn) {
                  return <Redirect to="/main"/>;
                }
                return <Redirect to="/home"/>;
              }}
            />


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
