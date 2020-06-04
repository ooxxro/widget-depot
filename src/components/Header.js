import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  background: #fa5898;
  z-index: 1;
`;

const Content = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .MuiAvatar-root {
    width: 40px;
    height: 40px;
  }
`;

const Logo = styled.h1`
  font-size: 22px;
  font-weight: bold;
  color: #fff;
`;

export default class Header extends React.Component {
  render() {
    return (
      <Wrapper className="main-header">
        <Content>
          <Logo>Widget Depot</Logo>
          <div>
            <Avatar />
          </div>
        </Content>
      </Wrapper>
    );
  }
}
