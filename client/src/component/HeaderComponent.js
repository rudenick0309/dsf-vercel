import React from "react";

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

    this.handleUserClick = this.handleUserClick.bind(this);
    this.handleGuestClick = this.handleGuestClick.bind(this);
    this.handleSignUpClick = this.handleSignUpClick.bind(this);
  }

  handleUserClick() {
    this.setState({isLoggedIn: true});
  }

  handleGuestClick() {
    this.setState({isLoggedIn: false});
  }

  handleSignUpClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const {isLoggedIn} = this.props;

    const sign = <SignUpClick onClick={this.handleSignUpClick}/>;
    const guest = <GuestClick onClick={this.handleGuestClick}/>;
    const user = <UserClick onClick={this.handleUserClick}/>;

    if (!isLoggedIn) {
      return (
        <div>
          {guest}
          {sign}
        </div>
      );
    }
    return <div>{user}</div>;
  }
}


export default HeaderComponent;

