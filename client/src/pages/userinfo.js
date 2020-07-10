// import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// // import {Viewinfo} from '../component/viewinfo'
// // import { getUserInfo } from '../component/viewinfo'

// const axios = require('axios'); 


// class Userinfo extends Component {
//   render(){
//     this.state = {
//         username: ''
//       };
//       const Viewinfo = () => {
//         axios.get('https://localhost:4000/user/info')
//         .then((res)=> {
//           console.log(res);
//         })
//         .catch(err => 
//           console.log(err))
//         }

//     return (
//       <div>
//         <center>
//           <h1>내 정보</h1>
//           <form 
//           Viewinfo = {Viewinfo}>
//           </form>
//           {/* <Viewinfo/> */}
//           {/* <getUserInfo/> */}

//           <Link to ="/editinfo">
//               <button
//                 style={{
//                   width: '200px',
//                   height: '30px',
//                   margin: '5px',
//                   borderRadius: '5px',
//                   backgroundColor: 'white'
//                 }}
//                 type="submit"
//               >
//                 내 정보 수정하기
//               </button>
//               </Link>

//           <Link to ="/main">
//               <button
//                 style={{
//                   width: '200px',
//                   height: '30px',
//                   margin: '5px',
//                   borderRadius: '5px',
//                   backgroundColor: 'white'
//                 }}
//                 type="submit"
//               >
//                 디저트 찾으러 가기
//               </button>
//               </Link>
//         </center>
//       </div>
//     )
//   }
// }

// export default Userinfo;


  
import React from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

export function Userinfo(props) {
  const { username, email, mobile } = props;

    return (
      <div>
         <center>
          <h1>내 정보</h1>
        <div className="username">{username}</div>
        <div className="email">{email}</div>
        <div className="mobile">{mobile}</div>

        <Link to ="/editinfo">
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
                내 정보 수정하기
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

    );
 
}