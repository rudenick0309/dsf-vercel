import React, {Component} from "react";
import  {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  BrowserRouter,
} from "react-router-dom";

import "./css/App.css";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Signup from "./component/Signup";
import Userinfo from "./pages/userinfo";
import Map from './pages/Map'

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
            <div>헤더 테스트 </div>
            <Link to={'/Map'} />

            <Switch>
              <Route path="/" component={Map} />
            </Switch>


            {/*<Route path="/signup" component={Signup} />*/}
            {/*<Route path="/mypage" component={Mypage} />*/}
            {/*<Route path="/main" render={() => <Main isLoggedIn={isLoggedIn} />}/>*/}
            {/*<Route path="/userinfo" component={Userinfo} />*/}

            {/*<Route path="/home" render={() => <Home isLoggedIn={isLoggedIn} onSubmit={onSubmitForm}/>}/>*/}


            {/*<Route*/}
            {/*  path="/"*/}
            {/*  render={() => {*/}
            {/*    if (isLoggedIn) {*/}
            {/*      return <Redirect to="/main"/>;*/}
            {/*    }*/}
            {/*    return <Redirect to="/home"/>;*/}
            {/*  }}*/}
            {/*/>*/}


          </div>
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
