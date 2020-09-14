import * as React from "react";
import {map} from "../store/map";
import {toJS} from "mobx";
import {useObserver} from "mobx-react";
import BlogList from "./BlogList";

const Blog = () => {
  return useObserver(() => (
    <>
      <div style={styles.div} >
        <div>{toJS(map.data)?.filter((el) => el.title[0] !== "<").length} 개의 블로그 검색 결과입니다</div>

          {toJS(map.data)?.filter((el) => el.title[0] !== "<").map((el) => {
            return <BlogList data={el} />;
          })}
      </div>
    </>
  ));
};

export default Blog;

const styles = {
  div: {
    height: '475px',
    overflow:'auto',
    wordBreak:'break-all',
  }
}
