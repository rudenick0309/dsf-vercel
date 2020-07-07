import React, {Component} from 'react';
import { Link } from 'react-router-dom';

//const axios = require('axios'); 

class Mainpage extends Component {
  render(){
    this.state = {
        username: ''
      };
    return (
      <div>
        <center>
          <h1>메인 페이지</h1>

          <Link to="/mypage">
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
                마이페이지
              </button>
              </Link>
        </center>
      </div>
    )
  }
}

export default Mainpage;