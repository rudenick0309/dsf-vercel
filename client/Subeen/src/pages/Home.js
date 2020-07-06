import React, {Component} from 'react';
import { Link, Route, Router } from 'react-router-dom';
import styled from "styled-components";
import Login from '../Components/Login';

import '../css/home.css';
//const axios = require('axios'); 

class Home extends Component {
  render(){
    return (
      <div>
        <Container></Container>
        <center>
        <div className = {"bottom-component"} >
          <Login />
          <Link to="/signup">
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
              </Link>

              <Link to = "/main">
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
                비회원으로 시작
              </button>
              </Link>
            </div>
          </center>
      </div>
    )
  }
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
      url(https://ifh.cc/g/BBELDa.jpg);
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: top;
  z-index: -100;
`;



export default Home;

