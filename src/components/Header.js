import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import {
  Tooltip,
  IconButton,
  Badge,
  MenuItem,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
} from '@material-ui/core';
import CartDrawer from './CartDrawer';
import themes from '../themes';

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  background: ${props => props.theme.headerBg};
  z-index: 1;
  font-family: ${props => props.theme.headerLogoFont};
  color: ${props => props.theme.headerFg};
`;

const Content = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .MuiAvatar-root {
    width: 36px;
    height: 36px;
  }
`;

const Logo = styled.h1`
  font-size: 22px;
  font-weight: bold;
  color: ${props => props.theme.headerFg};
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  > *:not(:first-child) {
    margin-left: 1rem;
  }
  .MuiIconButton-root {
    color: ${props => props.theme.headerFg};
  }

  .badge {
    .MuiBadge-badge {
      background: ${props => props.theme.badgeBg};
      color: #fff;
    }
  }
`;

export default class Header extends React.Component {
  state = {
    cartDrawerOpen: false,
    themeMenuOpen: false,
  };

  onSelectTheme = theme => {
    const { updateTheme } = this.props;
    this.setState({ themeMenuOpen: false });
    updateTheme(theme);
  };

  render() {
    const { cart, updateCart } = this.props;
    const { cartDrawerOpen, themeMenuOpen } = this.state;

    let count = 0;
    Object.keys(cart).forEach(id => {
      count += cart[id].quantity;
    });

    return (
      <Wrapper className="main-header">
        <Content>
          <Logo>Widget Depot</Logo>
          <Right>
            <Tooltip title="Change Theme">
              <IconButton
                aria-label="Change Theme"
                ref={el => {
                  this.themeMenuRef = el;
                }}
                onClick={() => this.setState(state => ({ themeMenuOpen: !state.themeMenuOpen }))}
              >
                <ColorLensIcon />
              </IconButton>
            </Tooltip>
            <Popper
              open={themeMenuOpen}
              anchorEl={this.themeMenuRef}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={() => this.setState({ themeMenuOpen: false })}>
                      <MenuList autoFocusItem={themeMenuOpen} id="theme-menu-list-grow">
                        {Object.keys(themes).map(theme => (
                          <MenuItem key={theme} onClick={() => this.onSelectTheme(theme)}>
                            {theme}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>

            <Tooltip title="View Cart">
              <IconButton
                aria-label="View Cart"
                onClick={() => this.setState({ cartDrawerOpen: true })}
              >
                <Badge badgeContent={count} className="badge">
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
