import * as React from "react";
import {map} from "../store/map";
import {toJS} from "mobx";
import {useObserver} from "mobx-react";
import ShoppingList from "./ShoppingList";
import styled from 'styled-components'


const Shopping = () => {
  console.log("f comment, map.dataTwo", map.dataTwo);
  // const mapData = toJS(map.dataTwo)?.filter((el) => el.title[0] !== "%")

  return useObserver(() => (
    <>
      <div style={styles.div}>

        {toJS(map.dataTwo)?.filter((el) => el.title[0] !== "%").map((el) => {
          return <ShoppingList data={el}/>;
        })}

      </div>
    </>
  ));
};

export default Shopping;

const styles = {
  div: {
    border:'3px solid yellow',
    height:'200px',
    overflow:'auto',
    display: 'flex',
  }
}
