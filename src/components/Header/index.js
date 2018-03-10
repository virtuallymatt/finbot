import React from 'react';
import styled from 'react-emotion';
import { Menu, Container, Image } from 'semantic-ui-react';

import logo from '../../images/logo.svg';

const HeaderWrapper = styled.nav`
  width: 100%;
  z-index: 999;
  background: none;
  padding-top: 45px;
`

const Header = () => {
  return (
  <div>
    <HeaderWrapper>
    <Container>
      <Menu secondary>
        <Menu.Item name="FinBot">
          <Image src={logo} alt="Fin Tax Bot"/>
        </Menu.Item>
      </Menu>
    </Container>
  </HeaderWrapper>
  </div>
)
}

export default Header
