import * as React from "react";
import {map} from "../store/map";
import {toJS} from "mobx";
import {useObserver} from "mobx-react";
import BlogList from "./BlogList";
import styled from "styled-components";
//이 컴포넌트에서 컬처네임을 불러와서 api 요청을 다시 mobx로 보내는게 아니라,
// mobx에서 map컴포넌트에서 네임을 받아서, 거기서 바로 api요청을 보내서 그 값만 여기서 받는 식으로 해야겟네.

const Container = styled.div`
  border: 3px solid red;
  height: 70%;
  overflow:auto;
  word-break:break-all;
`;

const Blog = () => {
  // console.log("f comment, map.data", toJS(map.data));

  return useObserver(() => (
    <>
      <div style={{border: '3px solid red', height:'640px', overflow:'auto'}}>

          {toJS(map.data)?.filter((el) => el.title[0] !== "<").map((el) => {
            return <BlogList data={el}/>;
          })}


      </div>
    </>
  ));
};

export default Blog;
