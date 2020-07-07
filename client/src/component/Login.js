import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

// const axios = require('./node_modules/axios');

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };

    this.handleInputValue = this.handleInputValue.bind(this);
  }

  handleInputValue = (key) => (e) => {
    this.setState({[key]: e.target.value});
  };

  render() {
    const {isLoggedIn, onSubmit} = this.props;
    console.log("로그인폼", isLoggedIn, onSubmit);

    return (
      <div>
        <center>
          <h1>Log In</h1>
          <form onSubmit={onSubmit}>
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
                onChange={this.handleInputValue("username")}
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
                onChange={this.handleInputValue("username")}
              ></input>
            </div>

            <Link to="/main">

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

            </Link>
          </form>
        </center>
      </div>
    )
      ;
  }
}

export default Login;
