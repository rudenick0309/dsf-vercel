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

const ContentStyled = styled(Content)`
  border: 3px solid green;
  width:40%;
`;

const AppLayout = ({children}) => {

  return (
    <>
      <Layout>
        <Header>
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
        </Header>
        <Layout>
          <Sider><Blog/></Sider>
          <ContentStyled><Map/></ContentStyled>
          <Sider><Blog/></Sider>
        </Layout>
        <Footer><Shopping/></Footer>
      </Layout>


      {/*<DivStd>*/}

      {/*  <MenuStd mode='horizontal'>*/}

      {/*    <MenuStdChildren.Item>*/}
      {/*      <Link href='/'><a>Home</a></Link>*/}
      {/*    </MenuStdChildren.Item>*/}

      {/*    <MenuStdChildren.Item>*/}
      {/*      <Link href='/signin'><a>sign in</a></Link>*/}
      {/*    </MenuStdChildren.Item>*/}

      {/*    <MenuStdChildren.Item>*/}
      {/*      <Link href='/signup'><a>sign up</a></Link>*/}
      {/*    </MenuStdChildren.Item>*/}

      {/*  </MenuStd>*/}

      {/*</DivStd>*/}


      {/*<Row gutter={4}>*/}
      {/*  <Col xs={24} md={2} />*/}
      {/*  <Col xs={24} md={16}><Map/></Col>*/}
      {/*  <Col xs={24} md={4}><Blog/></Col>*/}
      {/*  <Col xs={24} md={2} />*/}
      {/*</Row>*/}

      {/*<Row gutter={8} >*/}

      {/*  <Col xs={24} md={2} />*/}
      {/*  <Col xs={24} md={16}><Shopping/></Col>*/}
      {/*  <Col xs={24} md={6} />*/}

      {/*</Row>*/}

    </>
  );
};

export default AppLayout;
