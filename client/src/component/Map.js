import React, {Component} from "react";
import testPic from "../image/Imageee.jpg";
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import DessertSlide from "./DessertSlide";
import "./Map.css";
import CommentForm from "./CommentForm";
import axios from "axios";

class Map extends Component {
  state = {
    // 공통 state
    imageFile: testPic,
    x: 0,
    y: 0,
    count: 0,
    이름: null,  //클릭 했을 때, 여기에 culture명을 넣고, Culture.이름을 토대로 컴포에 전달
    // 북극: false,               1
    // 앵글로: false,              2
    // 라틴아메리카: false,         3
    // 오세아니아: false,          4
    // 아프리카: false,             5
    // 이슬람: false,              6
    // 유럽: false,               7
    // 동부아시아: false,
    // 남부아시아: false,
    // 동남아시아: false,
    // comments: [
    //   {
    //     북극: {
    //       id:1,
    //       comment : {
    //         선주 : "1잠온다",
    //         수빈 : "1잠온다2",
    //         윤혁 : "1잠온다3",
    //       }
    //     },
    //     앵글: {
    //       id:2,
    //       comments : {
    //         선주 : "2잠온다",
    //         수빈 : "2잠온다2",
    //         윤혁 : "2잠온다3",
    //       }
    //     }
    //   }
    //
    // ],


  };

  trackMousePoint = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  findCulture = (a, b) => {
    let result = null;

    if (a > 500 && a < 670 && b > 460 && b < 580) {
      result = "오세아니아";
    } else if (a > 1015 && a < 1180 && b > 345 && b < 600) {
      result = "라틴 아메리카";
    } else if (a > 700 && a < 1065 && b > 190 && b < 260) {
      result = "앵글로 아메리카";
    } else if (a > 410 && a < 1000 && b > 15 && b < 80) {
      result = "북극";
    } else if (a > 220 && a < 500 && b > 140 && b < 170) {
      result = "유럽";
    } else if (a > 165 && a < 270 && b > 270 && b < 300) {
      result = "이슬람";
    } else if (a > 400 && a < 520 && b > 220 && b < 265) {
      result = "동부 아시아";
    } else if (a > 60 && a < 220 && b > 350 && b < 530) {
      result = "아프리카";
    } else if (a > 310 && a < 400 && b > 300 && b < 380) {
      result = "남부 아시아";
    } else if (a > 420 && a < 540 && b > 340 && b < 420) {
      result = "동남 아시아";
    } else {
      result = "지역 위에 마우스를 올려주세요";
    }

    return result;
  };

  onClickCulture = (cultureName) => () => {
    this.setState({이름: cultureName});
    this.props.onClick();

    this.setState({
      count: 0,
    });
  };

  onClickLeft = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count--
      };
    });

    if (this.state.count === 0) {
      alert("반대 화살표를 눌러주세요");
      this.setState((prevState) => {
        return {
          count: prevState.count++
        };
      });
    }
  };

  onClickRight = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count++
      };
    });

    if (this.state.count === 3) {
      alert("반대 화살표를 눌러주세요");
      this.setState((prevState) => {
        return {
          count: prevState.count--
        };
      });
    }
  };


  render() {
    const {imageFile, x, y, 이름, count,} = this.state;
    const {trackMousePoint, findCulture, onClickCulture, onClickLeft, onClickRight} = this;
    const {connection} = this.props;
    const hoverName = findCulture(x, y);

    return (
      <div>
        <div className={"MapCSS"} onMouseMove={trackMousePoint}>

          <img className={"imgOfMapCSS"} src={imageFile} useMap={"#Map"}/>
          <map name={"Map"} id={"Map"}>
            <area name={"오세"} alt={"오세"} shape={"rect"} coords={"500,460,670,580"} onClick={onClickCulture("오세")}
                  tabIndex={"1"}/>
            <area name={"라틴"} alt={"라틴"} shape={"rect"} coords={"1015,345,1180,600"} onClick={onClickCulture("라틴")}
                  tabIndex={"1"}/>
            <area name={"앵글"} alt={"앵글"} shape={"rect"} coords={"700,190,1065,260"} onClick={onClickCulture("앵글")}
                  tabIndex={"1"}/>
            <area name={"북극"} alt={"북극"} shape={"rect"} coords={"410,15,1000,80"} onClick={onClickCulture("북극")}
                  tabIndex={"1"}/>
            <area name={"유럽"} alt={"유럽"} shape={"rect"} coords={"220,140,500,170"} onClick={onClickCulture("유럽")}
                  tabIndex={"1"}/>
            <area name={"이슬"} alt={"이슬"} shape={"rect"} coords={"165,270,270,300"} onClick={onClickCulture("이슬")}
                  tabIndex={"1"}/>
            <area name={"동부"} alt={"동부"} shape={"rect"} coords={"400,220,520,265"} onClick={onClickCulture("동부")}
                  tabIndex={"1"}/>
            <area name={"아프"} alt={"아프"} shape={"rect"} coords={"60,350,220,530"} onClick={onClickCulture("아프")}
                  tabIndex={"1"}/>
            <area name={"남부"} alt={"남부"} shape={"rect"} coords={"310,300,400,380"} onClick={onClickCulture("남부")}
                  tabIndex={"1"}/>
            <area name={"동남"} alt={"동남"} shape={"rect"} coords={"420,340,540,420"} onClick={onClickCulture("동남")}
                  tabIndex={"1"}/>
          </map>

        </div>
        <div>

          <DessertSlide count={count} clickLeft={onClickLeft} clickRight={onClickRight} hoverName={hoverName}
                        clickName={이름}/>
        </div>
        <div>

          <CommentForm connection={connection} clickName={이름}/>

        </div>
      </div>
    );

  }
}

export default Map;
