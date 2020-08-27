import React, {Component} from "react";

class WikiAPI extends Component {
  render() {
    const {connection} = this.props;
    if (connection) {
      return (
        <>
          <div>
            위키 에이피아이
          </div>
        </>

      )

    }
    return (
      <>
        <div>

        </div>
      </>
    )
  }
}

export default WikiAPI;
