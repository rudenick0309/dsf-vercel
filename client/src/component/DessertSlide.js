import * as React from "react";
import {useState} from "react";
import DessertList from "./DessertList";
import "../css/DessertSlide.css";
import axios from "axios";


const DessertSlide = () => {
  const [dessert, setDessert] = useState(null);

  const {hoverName, clickName, clickLeft, clickRight, count} = this.props;
  // const {state} = this; TODO: Do not deleted it untill checked what this state have a function

  const st = {
    display: clickName ? "flex" : "block",
  };

  // TODO: In here, a action goes to mobx (http://localhost:4000/dessert/find)

  return (
    <>
      {!clickName
        ? <div>'지도를 클릭해 주세요'</div>
        : <div className={"DessertSlideCSS"} style={st}>
          <span onClick={clickLeft}> 왼쪽 </span>
          {dessert && dessert.slice(count, count + 3).map((v) => {
            return <DessertList clickLeft={clickLeft} clickRight={clickRight} clickedCultureArray={v}/>;
          })}
          <span onClick={clickRight}> 오른쪽 </span>
        </div>
      }

      <br/>

    </>
  );

};

export default DessertSlide;


