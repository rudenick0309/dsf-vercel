import * as React from "react";
import {map} from "../store/map";
import {toJS} from "mobx";
import {useObserver} from "mobx-react";
import ShoppingList from "./ShoppingList";


const Shopping = () => {

  return useObserver(() => (
    <>
      <div>{toJS(map.dataTwo)?.filter((el) => el.title[0] !== "%").length} 개의 블로그 검색 결과입니다</div>
      {toJS(map.dataTwo)?.filter((el) => el.title[0] !== "%").length === 0 ?
        (<div> 결과가 존재하지 않습니다 </div>)
      :(<div style={styles.div}>
          {toJS(map.dataTwo)?.filter((el) => el.title[0] !== "%").map((el) => {
            return <ShoppingList data={el}/>;
          })}
        </div>)
      }

    </>
  ));
};

export default Shopping;

const styles = {
  div: {
    height:'200px',
    overflow:'auto',
    display: 'flex',
  }
}
