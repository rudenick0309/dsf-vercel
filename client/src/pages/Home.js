import React, { Component } from "react";
import { Link, Route, Router } from "react-router-dom";
import Login from "../component/Login";
import "../css/home.css";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {isLoggedIn, onSubmit} = this.props;

    return (
      <div>

        <center>
          <div className={"bottom-component"}>

            <Login isLoggedIn={isLoggedIn} onSubmit={onSubmit} />


            <Link to="/signup">
              <button

                type="submit"
              >
                회원가입
              </button>
            </Link>

            <Link to="/main">
              <button

                type="submit"
              >
                비회원으로 시작
              </button>
            </Link>
          </div>
        </center>
      </div>
    );
  }
}

export default Home;
