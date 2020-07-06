import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Viewinfo} from '../Components/viewinfo'

//const axios = require('axios'); 

class Userinfo extends Component {
  render(){
    this.state = {
        username: ''
      };

    return (
      <div>
        <center>
          <h1>내 정보</h1>
          <Viewinfo/>

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

export default Userinfo;