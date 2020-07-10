import React, { Component } from 'react'
import { Link } from 'react-router-dom';
const axios = require('axios');

class Signup extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        passwordcheck: '',
        username: '',
        mobile: ''
      };
      this.handleInputValue = this.handleInputValue.bind(this);
    }
    handleInputValue = key => e => {
      this.setState({ [key]: e.target.value });
    };

    checkPW = e => {
      e.preventDefault();
      //비밀번호 유효성검사(영문,숫자 혼합 6~20)
      const chkPwd = function(str) {
        var reg_pwd = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
        return !reg_pwd.test(str) ? false : true;
      };
      if (chkPwd(this.state.re_pw) === false) {
        alert("영문,숫자를 혼합하여 6~12자 이내");
        this.setState({
          password: "",
          passwordcheck: ""
        });
      } else {
        if (this.state.password === this.state.passwordcheck) {
          alert("일치합니다.");
          this.setState({
            pwCheck: this.state.passwordcheck
          });
        } else {
          alert("불일치합니다.");
        }
      }
    };
  
    render() {
      const {username, password, email, mobile} = this.state
      return (
        <div>
          <center>
            <h1>Sign Up</h1>
            <form onSubmit={e => {
            e.preventDefault();
            axios.post('http://localhost:4000/user/signup', {
              username: username,
              password: password,
              email: email,
              mobile: mobile
            })
              .then((res) => {
                alert("회원가입 되었습니다.")
              }) 
              .catch((error) => {
                alert("이미 존재하는 사용자입니다.")
              })
            
          }}>
          
            <div>
                <input
                  style={{
                    width: '195px',
                    height: '30px',
                    margin: '5px',
                    borderRadius: '5px'
                  }}
                  onChange={this.handleInputValue('username')}
                  placeholder="USERNAME"
                ></input>
                </div>
            <div>
                <input
                  style={{
                    width: '400px',
                    height: '30px',
                    margin: '5px',
                    borderRadius: '5px'
                  }}
                  type="email"
                  placeholder="EMAIL"
                  onChange={this.handleInputValue('email')}
                ></input>
              </div>
              <div checkPW={this.checkPW}>
              <div>
                <input
                  style={{
                    width: '400px',
                    height: '30px',
                    margin: '5px',
                    borderRadius: '5px'
                  }}
                  onChange={this.handleInputValue('password')}
                  type="password"
                  placeholder="PASSWORD"
                ></input>
              </div>
              
              <div>
                <input
                  style={{
                    width: '400px',
                    height: '30px',
                    margin: '5px',
                    borderRadius: '5px'
                  }}
                  onChange={this.handleInputValue('passwordcheck')}
                  type="password"
                  placeholder="PASSWORD CHECK"
                ></input>
              </div>
              </div>
              <div>
                <input
                  style={{
                    width: '195px',
                    height: '30px',
                    margin: '5px',
                    borderRadius: '5px'
                  }}
                  type="mobile"
                  onChange={this.handleInputValue('mobile')}
                  placeholder="MOBILE"
                ></input>
              </div>
              {/* <Link to="/home"> */}
              <button
                style={{
                  width: '200px',
                  height: '30px',
                  margin: '5px',
                  borderRadius: '5px',
                  backgroundColor: 'white'
                }}
                type="submit"
              >
                회원가입
              </button>
           {/* </Link> */}
           </form>
           <Link to="/home">
              <button
                style={{
                  width: '200px',
                  height: '30px',
                  margin: '5px',
                  borderRadius: '5px',
                  backgroundColor: 'white'
                }}
                type="submit"
              >
                홈 화면으로
              </button>
           </Link>
           
          </center>
        </div>
      );
    }
  }
  export default Signup;