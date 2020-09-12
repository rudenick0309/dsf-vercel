import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 3px solid blue;
  margin-bottom: 10px;
  margin-left: 30px;
  word-break:break-all;
`;

const ShoppingList = ({data}) => {
  // console.log("f shoppinglist, data", data);
  const {thumbnail, link, title} = data;
  return (
    <>
      <Container>
        <div>
          <img src={thumbnail} />
        </div>
      </Container>
    </>
  );
};

export default ShoppingList;

