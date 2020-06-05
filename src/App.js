import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import themes from './themes';
import Header from './components/Header';
import Home from './components/Home';

const GlobalStyle = createGlobalStyle`
  body.body-theme {
    background: ${props => props.theme.background};
  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
`;

const Content = styled.main`
  padding: 60px 1rem 2rem;
  min-height: 100vh;
  display: block;
`;

export default class App extends React.Component {
  state = {
    cart: {},
    theme: localStorage.getItem('theme') || 'ocean',
  };

  updateCart = newCart => {
    this.setState({ cart: newCart });
  };

  updateTheme = theme => {
    localStorage.setItem('theme', theme);
    this.setState({ theme });
  };

  render() {
    const { cart, theme } = this.state;

    return (
      <ThemeProvider theme={themes[theme]}>
        <Wrapper className="App">
          {/* normalize.css */}
          <CssBaseline />
          {/* styled-components global style */}
          <GlobalStyle />

          <Header cart={cart} updateCart={this.updateCart} updateTheme={this.updateTheme} />

          <Content>
            <Home cart={cart} updateCart={this.updateCart} />
          </Content>
        </Wrapper>
      </ThemeProvider>
    );
  }
}
