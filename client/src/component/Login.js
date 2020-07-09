import React, {Component} from "react";
import {Link, Redirect, withRouter, Router} from "react-router-dom";
import axios from "axios";
import history from '../history';


// const axios = require('./node_modules/axios');
class Login extends Component {
  constructor(props) {
    super(props);
    //수빈님, 여기서 email이랑 password ㅣ줭
    // this.handleInputValue = this.handleInputValue.bind(this);
  }
  // handleInputValue = (key) => (e) => {
  //   this.setState({[key]: e.target.value});
  // };

 

  render() {
    const {onSubmit, isLoggedIn, onChangeValue} = this.props;
    console.log(isLoggedIn)
    //const { email, password } = this.state;
    
    return (
      <div>
        <Router history = {history} />
        <center>
          <h1>Log In</h1>
          
          <form onSubmit={onSubmit}>
          // {/* <form onSubmit={e => {
          //     e.preventDefault();
          //     // TODO : 서버에 로그인 요청 후 처리하세요.
          //       return axios
          //       .post("https://localhost:4000/user/signin", {
          //         email: email,
          //         password: password
          //       })
          //       .then(() => {
          //         handleIsLoginChange()
          //         this.props.history.push("/main")
          //       })
          //       .catch(err => console.log(err)
          //       ) */}

              
            {/* // }} */}
            
            <div>
              <input
                style={{
                  width: "400px",
                  height: "30px",
                  margin: "5px",
                  borderRadius: "5px",
                }}
                type="email"
                placeholder="EMAIL"
                onChange={onChangeValue("email")} //*
              ></input>
            </div>
            <div>
              <input
                style={{
                  width: "400px",
                  height: "30px",
                  margin: "5px",
                  borderRadius: "5px",
                }}
                type="password"
                placeholder="PASSWORD"
                onChange={onChangeValue("password")}
              ></input>
            </div>
            {/* <Link to="/main"> */}
            <button
              style={{
                width: "200px",
                height: "30px",
                margin: "5px",
                borderRadius: "5px",
                backgroundColor: "white",
              }}
              type="submit"
            >
              로그인
            </button>
            {/* </Link> */}
          </form>
        </center>
      </div>
    )
      ;
  }
}
export default Login;
