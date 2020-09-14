import React from "react";
import {Menu, Input, Row, Col} from "antd";
import Link from "next/link";
import styled from "styled-components";
import Map from "./Map";
import Shopping from "./Shopping";
import Blog from "./Blog";

const DivStd = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const MenuStdChildren = styled(Menu)`
  justify-content: flex-end;
`;

const DivRowStyled = styled(Row)`
  display: flex;
`

const DivMediaStyle = styled.div`
  position: absolute;
  z-index:99;
  height: 100vh;
  width: 100vw;
  background-color:grey;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:40px;
  top:0;
  @media screen and (min-width: 1600px) {
    display:none;
  }
`

const AppLayout = ({children}) => {

  return (
    <>
      {/*<DivMediaStyle>현재 페이지</DivMediaStyle>*/}
      {/*=======================================================================*/}
      <DivStd>

        <Menu mode='horizontal'>

          <MenuStdChildren.Item>
            <Link href='/'><a>Home</a></Link>
          </MenuStdChildren.Item>

          <MenuStdChildren.Item>
            <Link href='/signin'><a>sign in</a></Link>
          </MenuStdChildren.Item>

          <MenuStdChildren.Item>
            <Link href='/signup'><a>sign up</a></Link>
          </MenuStdChildren.Item>

        </Menu>

      </DivStd>

      <div>
        <DivRowStyled gutter={4}>
          <Col xs={24} md={2} />
          <Col xs={24} md={14}><Map/></Col>
          <Col xs={24} md={6} ><Blog/></Col>
        </DivRowStyled>
      </div>

      <div>
        <Row gutter={4}>
          <Col xs={24} md={4} />
          <Col xs={24} md={16}><Shopping /></Col>
          <Col xs={24} md={4} />
        </Row>
      </div>


    </>
  );
};

export default AppLayout;

const styles = {
  container: {
    // marginLeft:'300px',
    // width:'700px',
  },
  rightSider: {
    backgroundColor:'none',
    marginRight:'300px',
    width:'1000px',
  }
}
