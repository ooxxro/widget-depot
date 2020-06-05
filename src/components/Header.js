import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Tooltip, IconButton, Badge } from '@material-ui/core';
import CartDrawer from './CartDrawer';

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

const Right = styled.div`
  display: flex;
  align-items: center;
  > *:not(:first-child) {
    margin-left: 1rem;
  }
  .MuiIconButton-root {
    color: #fff;
  }
`;

export default class Header extends React.Component {
  state = {
    cartDrawerOpen: false,
  };

  render() {
    const { cart, updateCart } = this.props;
    const { cartDrawerOpen } = this.state;

    let count = 0;
    Object.keys(cart).forEach(id => {
      count += cart[id].quantity;
    });

    return (
      <Wrapper className="main-header">
        <Content>
          <Logo>Widget Depot</Logo>
          <Right>
            <Tooltip title="View Cart">
              <IconButton
                aria-label="View Cart"
                onClick={() => this.setState({ cartDrawerOpen: true })}
              >
                <Badge badgeContent={count} color="primary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Avatar />
          </Right>
        </Content>

        <CartDrawer
          open={cartDrawerOpen}
          onClose={() => this.setState({ cartDrawerOpen: false })}
          cart={cart}
          updateCart={updateCart}
        />
      </Wrapper>
    );
  }
}
