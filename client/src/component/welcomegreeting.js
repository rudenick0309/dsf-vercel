// import React from 'react';
// import axios from 'axios';

// axios.defaults.withCredentials = true;

// export function Welcomegreeting(props) {
//     const { userinfo } = props;
//     return (
//         <div>
//             {/* <div className="username">{userinfo}</div> */}
//     {/* <h1>{userinfo.username}님, 오늘도 달콤한 하루 보내세요!</h1> */}
//     </div>
//     );
//   }

//   export default Welcomegreeting;



import React from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

export function Welcomegreeting(props) {
  const { username } = props;


    return (
      <div>
        <div>{username}</div>
        {/* <div className="email">{userinfo.email}</div>
        <div className="mobile">{userinfo.mobile}</div> */}
      </div>
    );
    }