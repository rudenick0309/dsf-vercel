import React, {Component} from 'react';
const axios = require('axios'); 

class Userinfo extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: '' ,
            logInDone: false
        }
    }

    componentDidMount(){ 
        this.getName();
  
      } 
  
      getName(){
           //유저네임 가져옴
           const apiUrl = 'dummy.json'; 
  
           axios.get(apiUrl)
              .then(data => { 
               //가지고 온 유저네임을 state에 저장. 
               this.setState({ 
                   username : data.username
                  }); 
              }).catch(error => { 
                  console.log(error); 
              }); 
          }
  }

  


  export function Welcomegreeting(props) {
    return (<h1>{props.username}님, 오늘도 달콤한 하루 보내세요!</h1>
    );
  }

  export default Userinfo;