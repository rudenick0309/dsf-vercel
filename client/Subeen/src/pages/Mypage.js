import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Welcomegreeting} from '../Components/welcomegreeting'



//const axios = require('axios'); 

class Mypage extends Component {
  render(){
    

    return (
      <div>
        <center>
          <h1>마이페이지</h1>
          <Welcomegreeting/> 
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