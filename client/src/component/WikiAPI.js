import React, {Component} from "react";

class WikiAPI extends Component {
  render() {
    const {connection, ENName} = this.props;
    console.log('위키에서 이름 : ', ENName)
    if (connection) {    // connection이 트루면 쇼핑 에이피아이 문구가 뜸.
      return (
        <>
          <div>
            위키 에이피아이
          </div>
        </>

      )

    }
    return (        // 여기는 비어있게
      <>
        <div>

        </div>
      </>
    )
  }
}

export default WikiAPI;