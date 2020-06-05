import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import Skeleton from '@material-ui/lab/Skeleton';
import WidgetCard from './WidgetCard';
import WidgetDetail from './WidgetDetail';
import SearchBar from './SearchBar';

const Wrapper = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding-top: 1rem;
  .MuiAlert-standardError {
    margin-bottom: 1rem;
  }
`;

const Content = styled.div`
  display: flex;
  padding-top: 1rem;
`;
const WidgetsList = styled.div`
  width: 220px;
  flex: 0 0 auto;
  margin: -16px;

  .MuiSkeleton-root {
    margin: 16px;
    height: 99px;
    border-radius: 5px;
  }
`;

export default class Home extends React.Component {
  state = {
    loading: true,
    errorMsg: null,
    widgets: [],
    selected: 0,
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get('/api/widgets.json')
      .then(response => {
        // console.log(response.data);
        const widgets = response.data.widgets;
        this.setState({ loading: false, widgets });
      })
      .catch(error => {
        // console.error(error);
        this.setState({
          loading: false,
          errorMsg: `Error while fetching widgets: ${error.message}`,
        });
      });
  }

  render() {
    const { widgets, loading, errorMsg, selected } = this.state;
    return (
      <Wrapper className="home-page">
        {errorMsg && <Alert severity="error">{errorMsg}</Alert>}

        <SearchBar />

        <Content>
          <WidgetsList>
            {loading
              ? [...Array(4)].map((_, i) => <Skeleton key={i} variant="rect" />)
              : widgets.map((widget, i) => (
                  <WidgetCard
                    key={widget.id}
                    name={widget.name}
                    price={widget.price}
                    onClick={() => this.setState({ selected: i })}
                  />
                ))}
          </WidgetsList>

          <WidgetDetail loading={loading} widget={widgets[selected]} />
        </Content>
      </Wrapper>
    );
  }
}
