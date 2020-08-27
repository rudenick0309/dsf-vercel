import * as React from "react";
import {useState, useCallback,use} from "react";
import mapImage from "../image/Imageee.jpg";
import DessertSlide from "./DessertSlide";
import "../css/Map.css";
import CommentForm from "./CommentForm";

const Map = () => {
  const imageFile = mapImage;
  const [widthAndHeight, setWidthAndHeight] = useState({
    x: 0,
    y: 0,
    count: 0,
    이름: null,
  })


  const {x,y,count,이름} = widthAndHeight;
  const hoverName = findCulture(x, y);

  const trackMousePoint = useCallback((event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }, [widthAndHeight]);

  const findCulture = useCallback((a, b) => {
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
  }, [widthAndHeight]);


  const onClickCulture = (cultureName) => () => {
    setWidthAndHeight((prevState) => {
      return {
        ...prevState,
        이름: cultureName,
      }
    });
    // this.props.onClick();
    props.onClick();

    setWidthAndHeight((prevState) => {
      return {
        ...prevState,
        count: 0,
      }
    });
  };

  const onClickLeft = () => {
    setWidthAndHeight((prevState) => {
      return {
        ...prevState,
        count: prevState.count--
      };
    });

    if (this.state.count === 0) {
      alert("반대 화살표를 눌러주세요");
      setWidthAndHeight((prevState) => {
        return {
          ...prevState,
          count: prevState.count++
        };
      });
    }
  };

  const onClickRight = () => {
    setWidthAndHeight((prevState) => {
      return {
        ...prevState,
        count: prevState.count++
      };
    });

    if (this.state.count === 3) {
      alert("반대 화살표를 눌러주세요");
      setWidthAndHeight((prevState) => {
        return {
          ...prevState,
          count: prevState.count--
        };
      });
    }
  };

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
  )
} //


export default Map;

