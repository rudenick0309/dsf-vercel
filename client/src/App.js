import React, {Component} from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  BrowserRouter,
} from "react-router-dom";
import axios from 'axios';
import "./App.css";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Mypage from "./pages/Mypage";
import Signup from "./component/Signup";
import {Userinfo} from "./pages/userinfo";
import Editinfo from "./component/Editinfo";
// import { Welcomegreeting } from "./Components/welcomegreeting";

import HeaderComponent from "./component/HeaderComponent";
import ShoppingAPI from "./component/ShoppingAPI";

class App extends Component {
  state = {
    isLoggedIn: false,
    userinfo: {},
    email: null,
    password: null,
    username: '',
    mobile: ''
  };


  // getUserInfo = () => {
  //   axios.get('http://localhost:4000/users')
  // .then((res) => {
  //   // handle success
  //   console.log(res.data);
  //   this.setState({userinfo: res.data})
  // }) 
  // .catch((err) => {
  //   // handle error
  //   console.log(err);
  // })
  // }

  onChangeValue = (key) => (e) => {
    this.setState({[key]: e.target.value});
  };


  onSubmitForm = async (e) => {  //form onSubmit={onSubmit} 을 변경 
    e.preventDefault();
     await axios.post("http://13.125.58.125:4000/user/signin", 
    {
      email: this.state.email,
      password: this.state.password,
    }
    )
      .then(res => {
        console.log(res.status)
      if(res.status === 201) {
        console.log("안뇽!")
        this.setState({isLoggedIn :true})
        Redirect("/main")
      }
      })
      .catch(err => {
        console.log(err)
        alert("유효하지 않은 사용자입니다.")
      })
      
  }

  getUserinfo() {
    axios.get('http://13.125.58.125:4000/user/info').then(res => {
      console.log(res.data);
      this.setState({ userinfo: res.data });
    });
  }

  render() {
    const {isLoggedIn} = this.state;
    const {onSubmitForm, onChangeValue} = this;
    const {username, email, mobile} = this.state
    console.log("App 컴포넌트 : ", isLoggedIn);

    return (
      <div>
        <BrowserRouter>
          <div>
          
            {/*{this.state.test}*/}
            {/*<Route path="/home" component={Home} />*/}
            <Route path="/signup" component={Signup} />
            <Route path="/main" render={() => <Main isLoggedIn={isLoggedIn} />}/>
            <Route path="/userinfo" render={() => <Userinfo getUserinfo={this.getUserinfo} username={username} email={email} mobile={mobile}/>} />
            <Route path="/editinfo" render={() => <Editinfo getUserinfo={this.getUserinfo} username={username} email={email} mobile={mobile}/>} />
            <Route path="/home" render={() => <Home onChangeValue={onChangeValue} isLoggedIn={isLoggedIn} onSubmit={onSubmitForm} />}/>
            <Route path="/mypage"render={() => <Mypage getUserinfo={this.getUserinfo} username={username} />}/>

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
