import React, { Component } from 'react'
import { Link } from 'react-router-dom';
const axios = require('axios');

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
  
    render( ) {
      const { username, password, email, mobile } = this.props;
      return (
        <div>
          <center>
            <h1>회원정보 수정</h1>
            <form onSubmit={e => {
            e.preventDefault();
            axios.put('http://13.125.58.125:4000/user/resign')
              .then((res) => {
                alert(" 회원정보가 정상적으로 수정되었습니다.")
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
                  placeholder= {username}
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
                  placeholder={email}
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
                    width: '400px',
                    height: '30px',
                    margin: '5px',
                    borderRadius: '5px'
                  }}
                  onChange={this.handleInputValue('password')}
                  type="password"
                  placeholder="PASSWORD CHECK"
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
                  placeholder= {mobile}
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
           </form>
          </center>
        </div>
      );
    }
  }
  export default Editinfo;

// import React from 'react';
// import axios from 'axios';

// axios.defaults.withCredentials = true;

// export function Editinfo(props) {


//   const { username, email, mobile } = props;

//   return (
//             <div>
//               <center>
//                 <h1>회원정보 수정</h1>
                
//                 <div>
//                     <input
//                       style={{
//                         width: '195px',
//                         height: '30px',
//                         margin: '5px',
//                         borderRadius: '5px'
//                       }}
//                       onChange={this.handleInputValue('username')}
//                       placeholder= {username}
//                     ></input>
//                     </div>
//                 <div>
//                     <input
//                       style={{
//                         width: '400px',
//                         height: '30px',
//                         margin: '5px',
//                         borderRadius: '5px'
//                       }}
//                       type="email"
//                       placeholder={email}
//                       onChange={this.handleInputValue('email')}
//                     ></input>
//                   </div>
//                   <div>
//                     <input
//                       style={{
//                         width: '400px',
//                         height: '30px',
//                         margin: '5px',
//                         borderRadius: '5px'
//                       }}
//                       onChange={this.handleInputValue('password')}
//                       type="password"
//                       placeholder="PASSWORD"
//                     ></input>
//                   </div>
    
//                   <div>
//                     <input
//                       style={{
//                         width: '400px',
//                         height: '30px',
//                         margin: '5px',
//                         borderRadius: '5px'
//                       }}
//                       onChange={this.handleInputValue('password')}
//                       type="password"
//                       placeholder="PASSWORD CHECK"
//                     ></input>
//                   </div>
                  
//                   <div>
//                     <input
//                       style={{
//                         width: '195px',
//                         height: '30px',
//                         margin: '5px',
//                         borderRadius: '5px'
//                       }}
//                       type="mobile"
//                       onChange={this.handleInputValue('mobile')}
//                       placeholder= {mobile}
//                     ></input>
//                   </div>
                  
//                   <Link to = "/userinfo">
//                   <button
//                     style={{
//                       width: '200px',
//                       height: '30px',
//                       margin: '5px',
//                       borderRadius: '5px',
//                       backgroundColor: 'white'
//                     }}
//                     type="submit"
//                   >
//                     수정
//                   </button>
//                   </Link>
               
//               </center>
//             </div>
//           );
 
// }