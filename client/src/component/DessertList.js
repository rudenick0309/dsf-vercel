import React, {Component} from "react";
import "./DessertList.css";

class DessertList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {clickedCultureArray,clickLeft,clickRight} = this.props;
    const {dessert_image_url, dessert_ENname, dessert_nation} = clickedCultureArray;

    // console.log('디저쓰 리스트 : ', dessert_image_url)

    // console.log('디저트 리스트 에서: ', clickedCultureArray)
    // 내가 출력해야 하는 것? - 이미지, 국가, 디저트 이름

    return (
      //왜 css는 다른 파일에서 임포트를 해야 읽히지?? 노어이 노어이   노이어 축구공으로 맞아볼래?
      //css 클래스명 수정할 것. 노일관성임 지금은.
      <div className={'DessertListCSS'}>
        {/*<span onClick={clickLeft}> 왼쪽 </span>*/}

        <span className={'dessert-list-span'} >
          {/*{clickedCultureArray}*/}
          <img width={150} height={150} src={dessert_image_url} />
          {dessert_nation}
          {dessert_ENname}
        </span>

        {/*<span onClick={clickRight}> 오른쪽 </span>*/}
      </div>
    );
  }
}

export default DessertList;

//
// 디저트 리스트 에서:
//   dessert_ENname: "Lamington"
// dessert_KOname: "래밍턴"
// dessert_culture: "오세"
// dessert_image_url: "https://ifh.cc/g/CFaQrA.jpg"
// dessert_nation: "호주"
// id: 25

