
import React from 'react';

import {Menu,Input, Row, Col} from 'antd';
import Link from 'next/link'
import styled from 'styled-components';
import Map from "./Map";

const DivStd = styled.div`
  display: flex;
  justify-content: flex-end;
`

const MenuStd = styled(Menu)`
`

const MenuStdChildren = styled(Menu)`
  justify-content: flex-end;
`

const AppLayout = ({children}) => {
  return (
    <>
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


      <Row gutter={8}>

        <Col xs={24} md={2} />
        <Col xs={24} md={16}><Map/></Col>
        <Col xs={24} md={6}>{children}</Col>

      </Row>

    </>
  )
}

export default AppLayout;
