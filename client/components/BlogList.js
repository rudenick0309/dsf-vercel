import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 3px solid blue;
  margin-bottom: 10px;
  word-break:break-all;
`;

const BlogList = ({data}) => {
  // console.log("f commentlist, data", data);
  const {bloggername, link, title} = data;
  return (
    <>
      <Container>
        <div>
          bloggername: {bloggername}
        </div>
        <div>
          link : {link}
        </div>
        <div>
          title: {title}
        </div>
      </Container>
    </>
  );
};

export default BlogList;

