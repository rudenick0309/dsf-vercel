import React from "react";
// import UserMode from "./UserMode";
// import GuestMode from "../component/GuestMode";
// import App from "App";
// axios 라이브러리 - react, http 통신

// 로그인, 비회원의 경우 컴포넌트

// 로그인 버튼
// funtion LoginBt(props){};

// 비회원으로 시작 버튼
// function StartGuest(props){};

// 회원가입 버튼
// function SignUp(props){};

// 로그아웃 버튼
// function Logout(props){};

// 레이아웃과 기능에만 신경쓰기
// state상태에 따라 로그인상태, 비회원모드

function UserClick(props) {
  return (
    <div>
      <h1>User Mode</h1>
      <button onClick={props.onClick}>마이페이지</button>
      <button onClick={props.onClick}>로그아웃</button>
    </div>
  );
}

function GuestClick(props) {
  return (
    <div>
      <h1>Guest Mode</h1>
      <button onClick={props.onClick}>로그인</button>
    </div>
  );
}

function SignUpClick(props) {
  return (
    <div>
      <button onClick={props.onClick}>회원가입</button>
    </div>
  );
}

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   isLoggedIn: true,
    // };
    this.handleUserClick = this.handleUserClick.bind(this);
    this.handleGuestClick = this.handleGuestClick.bind(this);
    this.handleSignUpClick = this.handleSignUpClick.bind(this);
    this.state = { isLoggedIn: false, isSignUp: false };
    // this.handleChange = this.handleChange.bind(this);
  }

  handleUserClick() {
    this.setState({ isLoggedIn: true });
  }

  handleGuestClick() {
    this.setState({ isLoggedIn: false });
  }

  handleSignUpClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const { isLoggedIn } = this.state;
    const sign = <SignUpClick onClick={this.handleSignUpClick} />;
    const guest = <GuestClick onClick={this.handleGuestClick} />;
    const user = <UserClick onClick={this.handleUserClick} />;
    // const isSignUp = this.state.isSignUp;
    // const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return (
        <div>
          {guest}
          {sign}
        </div>
      );
    }

    return <div>{user}</div>;

    /*
    const { isSignUp } = this.state;
    if (isSignUp) {
      return <div>{(sign = <div></div>)}</div>;
    }*/
  }
}

// ReactDOM.render(</*페이지*/ isLoggedIn={true}>, document.getElementById("root"));

export default HeaderComponent;
// 수정본 기기
