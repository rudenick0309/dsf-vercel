import * as React from 'react';
import {useState, useCallback} from "react";
import img from "../public/Imageee.jpg";
import {map} from '../store/map'


const Map = () => {

  const onClickCulture = useCallback((cultureName) => (e) => {
    map.cultureNameU(cultureName)
  }, []);

  return (
    <>
      <div >
        <img src={img} useMap={"#Map"}  style={{border:'3px solid yellow'}}/>
        <map name={"Map"} id={"Map"}>
          <area name={"오세"} alt={"오세"} shape={"rect"} coords={"500,460,670,580"} onClick={onClickCulture("오세아니아")}
                tabIndex={"1"}/>
          <area name={"라틴"} alt={"라틴"} shape={"rect"} coords={"1015,345,1180,600"} onClick={onClickCulture("라틴아메리카")}
                tabIndex={"1"}/>
          <area name={"앵글"} alt={"앵글"} shape={"rect"} coords={"700,190,1065,260"} onClick={onClickCulture("앵글로니아")}
                tabIndex={"1"}/>
          <area name={"북극"} alt={"북극"} shape={"rect"} coords={"410,15,1000,80"} onClick={onClickCulture("북극")}
                tabIndex={"1"}/>
          <area name={"유럽"} alt={"유럽"} shape={"rect"} coords={"220,140,500,170"} onClick={onClickCulture("유럽")}
                tabIndex={"1"}/>
          <area name={"이슬"} alt={"이슬"} shape={"rect"} coords={"165,270,270,300"} onClick={onClickCulture("이슬람")}
                tabIndex={"1"}/>
          <area name={"동부"} alt={"동부"} shape={"rect"} coords={"400,220,520,265"} onClick={onClickCulture("동부아시아")}
                tabIndex={"1"}/>
          <area name={"아프"} alt={"아프"} shape={"rect"} coords={"60,350,220,530"} onClick={onClickCulture("아프리카")}
                tabIndex={"1"}/>
          <area name={"남부"} alt={"남부"} shape={"rect"} coords={"310,300,400,380"} onClick={onClickCulture("남부아시아")}
                tabIndex={"1"}/>
          <area name={"동남"} alt={"동남"} shape={"rect"} coords={"420,340,540,420"} onClick={onClickCulture("동남아시아")}
                tabIndex={"1"}/>
        </map>

      </div>

    </>
  );

}

export default Map;
