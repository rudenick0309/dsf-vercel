import React, {Component} from "react";
import "./DessertList.css";

class DessertList extends Component {
  constructor(props) {
    super(props);
  }

  onClickConsole= (e) => {
    console.log('디저트리스트', e.target);
    console.log('디저트리스트', e.target.value);
  }

  render() {
    const {clickedCultureArray,onClickDessert } = this.props;
    const {onClickConsole} = this;
    // console.log('최하위 디저트리스트 : ', onClickDessert)
    const {dessert_image_url, dessert_ENname, dessert_nation} = clickedCultureArray;

    return (
      //css 클래스명 수정할 것. 노일관성임 지금은.
      <div className={'DessertListCSS'} onClick={onClickConsole} >
        <span className={'dessert-list-span'}  onClick={onClickDessert(clickedCultureArray)} >
          <img width={150} height={150} src={dessert_image_url} />
          {dessert_nation}
          {dessert_ENname}
        </span>
      </div>
    );
  }
}

export default DessertList;

