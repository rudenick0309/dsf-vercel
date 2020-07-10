import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Welcomegreeting} from "../component/welcomegreeting"



//const axios = require('axios'); 

class Mypage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };

  }

  render(){
    // console.log('마이페이지')
    const {username} = this;
    return (
      <div>
        <center>
          <h1>마이페이지</h1>
          {username}님! 오늘도 달콤한 하루 보내세요! 
           <Link to= "/userinfo">
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
                내 정보 조회
              </button>
              </Link>

              <Link to ="/main">
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
                디저트 찾으러 가기
              </button>
              </Link>
        </center>
      </div>
    )
  }
}

export default Mypage;