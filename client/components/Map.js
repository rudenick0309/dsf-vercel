import * as React from 'react';
import {useState, useCallback} from "react";
import img from "../public/Imageee.jpg";
import {map} from '../store/map'
import ImageMapper from 'react-image-mapper';
// 1,2,3,4
// 1 3 은 평행선, 2 4는 수직선
// 오른쪽으로 갈 수록 1 3은 숫자가 커지고
// 위쪽으로 갈 수록 2 4 는 작아진다
const MAP = {
  name: "my-map",
  areas: [
    {
      name: "1",
      shape: "rect",
      coords: [60,260,180,400], // 79,325,228,507
      preFillColor: "green",
      fillColor: "blue"
    },
    {
      name: "2",
      shape: "poly",
      coords: [219, 118, 220, 210, 283, 210, 284, 119],
      preFillColor: "pink"
    },
    {
      name: "3",
      shape: "poly",
      coords: [381, 241, 383, 94, 462, 53, 457, 282],
      fillColor: "yellow"
    },
    {
      name: "4",
      shape: "poly",
      coords: [245, 285, 290, 285, 274, 239, 249, 238],
      preFillColor: "red"
    },
    { name: "5", shape: "circle", coords: [170, 100, 25] }
  ]
};


const Map = () => {
  const onClick = (e) => {
    console.log("이것은!", e.name);
  };
  // const onClickCulture = useCallback((cultureName) => (e) => {
  //   map.cultureNameU(cultureName)
  // }, []);

  return (
    <>
      <div >
        <div className="container">
          <ImageMapper
            src={img}
            map={MAP}
            width={900}
            onClick={onClick}
          />
        </div>

      </div>

    </>
  );

}

export default Map;

//
// <img src={img} useMap={"#Map"}  style={{border:'3px solid yellow'}}/>
// <map name={"Map"} id={"Map"}>
//   <area name={"오세"} alt={"오세"} shape={"rect"} coords={"500,460,670,580"} onClick={onClickCulture("오세아니아")}
//         tabIndex={"1"}/>
//   <area name={"라틴"} alt={"라틴"} shape={"rect"} coords={"1015,345,1180,600"} onClick={onClickCulture("라틴아메리카")}
//         tabIndex={"1"}/>
//   <area name={"앵글"} alt={"앵글"} shape={"rect"} coords={"700,190,1065,260"} onClick={onClickCulture("앵글로니아")}
//         tabIndex={"1"}/>
//   <area name={"북극"} alt={"북극"} shape={"rect"} coords={"410,15,1000,80"} onClick={onClickCulture("북극")}
//         tabIndex={"1"}/>
//   <area name={"유럽"} alt={"유럽"} shape={"rect"} coords={"220,140,500,170"} onClick={onClickCulture("유럽")}
//         tabIndex={"1"}/>
//   <area name={"이슬"} alt={"이슬"} shape={"rect"} coords={"165,270,270,300"} onClick={onClickCulture("이슬람")}
//         tabIndex={"1"}/>
//   <area name={"동부"} alt={"동부"} shape={"rect"} coords={"400,220,520,265"} onClick={onClickCulture("동부아시아")}
//         tabIndex={"1"}/>
//   <area name={"아프"} alt={"아프"} shape={"rect"} coords={"60,350,220,530"} onClick={onClickCulture("아프리카")}
//         tabIndex={"1"}/>
//   <area name={"남부"} alt={"남부"} shape={"rect"} coords={"310,300,400,380"} onClick={onClickCulture("남부아시아")}
//         tabIndex={"1"}/>
//   <area name={"동남"} alt={"동남"} shape={"rect"} coords={"420,340,540,420"} onClick={onClickCulture("동남아시아")}
//         tabIndex={"1"}/>
// </map>
