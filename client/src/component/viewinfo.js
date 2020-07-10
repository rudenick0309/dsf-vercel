import React, {Component} from 'react';
import axios from 'axios';

export function Viewinfo() {
axios.get('https://localhost:4000/user/info')
.then((res)=> {
  console.log(res);
})
.catch(err => 
  console.log(err))
}
  // class getUserInfo extends Component() {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     username: '',
    //     email: '',
    //     mobile: ''
    //   }
    // }

  //   render() {
  //     // const {username, email, mobile} = this.state
  //     // return (
  //     //   // axios.get('http://localhost:4000/routes/users', {
  //     //   //   username: username,
  //     //   //   email: email,
  //     //   //   mobile: mobile
  //     //   // })
  //     //   // .then((res) => {
  //     //   //   console.log(res);
  //     //   // }) 
  //     //   // .catch((err) => {
  //     //   //   console.log(err);
  //     //   // })
  //     // )
  //   }
    
  // }



  // export function getUserInfo(props) {
   
  //   return (
  //     <div>
  //       {props.isLoggedin ?
  //         <div>
  //           <h1>내 정보</h1>
  //           <div className='username'>{props.userinfo.username}</div>
  //           <div className='email'>{props.userinfo.email}</div>
  //           <div className='mobile'>{props.userinfo.mobile}</div>
  //         </div>
  //         :
  //         <div>
  //           <h1>NOT FOUND</h1>
  //         </div>}
  //     </div>
  //   );
  // }

  // export default getUserInfo;