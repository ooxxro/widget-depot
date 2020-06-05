import React from 'react';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import Home from './components/Home';

const Wrapper = styled.div`
  min-height: 100vh;
`;

const Content = styled.main`
  padding: 60px 1rem 2rem;
  min-height: 100vh;
  display: block;
`;

function App() {
  return (
    <Wrapper className="App">
      {/* normalize.css */}
      <CssBaseline />

      <Header />
      <Content>
        <Home />
      </Content>
    </Wrapper>
  );
}

export default App;
