import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 10px;
  margin-left: 30px;
  word-break:break-all;
`;


const ShoppingList = ({data}) => {
  const {thumbnail, link, } = data;
  return (
    <>
      <Container>
        <div>
          <a href={link} target={'_blank'}>
            <img src={thumbnail}/>
          </a>
        </div>
      </Container>
    </>
  );
};

export default ShoppingList;

