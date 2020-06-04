import React from 'react';
import styled from 'styled-components';
import WidgetCard from './WidgetCard';
import WidgetDetail from './WidgetDetail';
import SearchBar from './SearchBar';

const Wrapper = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding-top: 1rem;
`;

const Content = styled.div`
  display: flex;
  padding-top: 1rem;
`;
const WidgetsList = styled.div`
  width: 220px;
  flex: 0 0 auto;
  margin: -16px;
`;

export default class Home extends React.Component {
  render() {
    return (
      <Wrapper className="home-page">
        <SearchBar />
        <Content>
          <WidgetsList>
            <WidgetCard name="Widget 1" price={750} />
            <WidgetCard name="Widget 2" price={240} />
            <WidgetCard name="Widget 3" price={500} />
            <WidgetCard name="Widget 4" price={900} />
          </WidgetsList>
          <WidgetDetail />
        </Content>
      </Wrapper>
    );
  }
}
