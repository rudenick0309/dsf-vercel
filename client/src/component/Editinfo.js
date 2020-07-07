import React, { Component } from 'react'
import { Link } from 'react-router-dom';
//const axios = require('axios');

class Editinfo extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: '',
        email: '',
        mobile: ''
      };
      this.handleInputValue = this.handleInputValue.bind(this);
    }
    handleInputValue = key => e => {
      this.setState({ [key]: e.target.value });
    };
  
    render() {
      return (
        <div>
          <center>
            <h1>회원정보 수정</h1>
            
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
              
              <Link to = "/userinfo">
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
                수정
              </button>
              </Link>
           
          </center>
        </div>
      );
    }
  }
  export default Editinfo;