import React from "react";

import {Menu, Input, Row, Col} from "antd";
import Link from "next/link";
import styled from "styled-components";
import Map from "./Map";
import Shopping from "./Shopping";
import Blog from "./Blog";
import {Layout} from "antd";

const {Header, Footer, Sider, Content} = Layout;


const DivStd = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const MenuStd = styled(Menu)`
`;

const MenuStdChildren = styled(Menu)`
  justify-content: flex-end;
`;

const DivStyled = styled.div`
  border:3px solid pink;
`
const DivRowStyled = styled(Row)`
  border:3px solid black;
  display: flex;
  
`


const AppLayout = ({children}) => {

  return (
    <>
      {/*<Layout>*/}
      {/*  <Header>*/}
      {/*    <DivStd>*/}

      {/*      <MenuStd mode='horizontal'>*/}

      {/*        <MenuStdChildren.Item>*/}
      {/*          <Link href='/'><a>Home</a></Link>*/}
      {/*        </MenuStdChildren.Item>*/}

      {/*        <MenuStdChildren.Item>*/}
      {/*          <Link href='/signin'><a>sign in</a></Link>*/}
      {/*        </MenuStdChildren.Item>*/}

      {/*        <MenuStdChildren.Item>*/}
      {/*          <Link href='/signup'><a>sign up</a></Link>*/}
      {/*        </MenuStdChildren.Item>*/}

      {/*      </MenuStd>*/}

      {/*    </DivStd>*/}
      {/*  </Header>*/}

      {/*  <Layout>*/}
      {/*    <Sider></Sider>*/}
      {/*    <Content style={styles.container}>{children}</Content>*/}
      {/*    <Sider style={styles.rightSider}><Blog/></Sider>*/}
      {/*  </Layout>*/}
      {/*  <Footer><Shopping/></Footer>*/}
      {/*</Layout>*/}

      {/*=======================================================================*/}
      <DivStd>

        <MenuStd mode='horizontal'>

          <MenuStdChildren.Item>
            <Link href='/'><a>Home</a></Link>
          </MenuStdChildren.Item>

          <MenuStdChildren.Item>
            <Link href='/signin'><a>sign in</a></Link>
          </MenuStdChildren.Item>

          <MenuStdChildren.Item>
            <Link href='/signup'><a>sign up</a></Link>
          </MenuStdChildren.Item>

        </MenuStd>

      </DivStd>

      <DivStyled>
        <DivRowStyled gutter={4}>
          <Col xs={24} md={2} />
          <Col xs={24} md={14}><Map/></Col>
          <Col xs={24} md={6} ><Blog/></Col>
        </DivRowStyled>
      </DivStyled>

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
