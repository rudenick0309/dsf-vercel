import * as React from 'react';
import {useState, useCallback} from "react";
import img from "../public/Imageee.jpg";
import {map} from '../store/map'
import ImageMapper from 'react-image-mapper';

const MAP = {
  name: "world",
  areas: [
    {
      name: "아프리카",
      shape: "rect",
      coords: [60,260,180,400],
    },
    {
      name: "이슬람",
      shape: "rect",
      coords: [100,200,200,250],
    },
    {
      name: "남부아시아",
      shape: "rect",
      coords: [240,200,290,250],
    },
    {
      name: "유럽",
      shape: "rect",
      coords: [150,100,400,150],
    },
    {
      name: "동부아시아",
      shape: "rect",
      coords: [300,150,400,220],
    },
    {
      name: "동남아시아",
      shape: "rect",
      coords: [300,250,400,330],
    },
    {
      name: "오세아니아",
      shape: "rect",
      coords: [350,350,500,430],
    },
    {
      name: "라틴아메리카",
      shape: "rect",
      coords: [700,220,880,500],
    },
    {
      name: "앵글로아메리카",
      shape: "rect",
      coords: [600,100,800,200],
    },
    {
      name: "북극",
      shape: "rect",
      coords: [240,20,800,70],
    },
  ]
};


const Map = () => {
console.log('아왜...')
  const onClick = useCallback((e) => {
    map.cultureNameU(e.name)
  },[]);

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
