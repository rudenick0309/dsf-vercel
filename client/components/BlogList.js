import * as React from "react";
import styled from "styled-components";
import ReactHtmlParser from 'react-html-parser';

const Container = styled.div`
  border-bottom: 1px solid grey;
  border-radius:5px;
  margin-bottom: 20px;
  word-break:break-all;
`;

const BrStyled = styled.br`
  margin-bottom: 10px;
`

const BlogList = ({data}) => {
  const {bloggername, link, title} = data;
  return (
    <>
      <Container>
        <div>
          <a href={link} target="_blank">
            {`<${bloggername}>`} 블로거의
            <BrStyled/>
            {ReactHtmlParser(title)}
          </a>
        </div>
      </Container>
    </>
  );
};

export default BlogList;

