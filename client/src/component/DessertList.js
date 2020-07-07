import React, {Component} from "react";
import "./DessertList.css";

class DessertList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {clickedCultureArray} = this.props;

    return (
      //왜 css는 다른 파일에서 임포트를 해야 읽히지?? 노어이 노어이   노이어 축구공으로 맞아볼래?
      <div className={'DessertListCSS'}>
        <span className={'dessert'} >
          {clickedCultureArray}
        </span>
      </div>
    );
  }
}

export default DessertList;