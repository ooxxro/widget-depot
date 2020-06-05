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
  position: relative;
  color: ${props => props.theme.color};
  .MuiAlert-standardError {
    margin-bottom: 1rem;
  }
`;

const Content = styled.div`
  display: flex;
  padding-top: 1rem;

  @media only screen and (max-width: 700px) {
    flex-direction: column;

    .widget-detail {
      margin: 2rem 0 0;
    }
  }
`;
const WidgetsList = styled.div`
  width: 220px;
  flex: 0 0 auto;
  margin: -16px;
  @media only screen and (max-width: 700px) {
    overflow-x: auto;
    width: 100%;
    margin: 0%;
    display: flex;
    align-items: center;
    padding-bottom: 0.5rem;
    min-height: 140px;
    .widget-card {
      flex: 0 0 200px;
      margin: 0 0.5rem;
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }

  .MuiSkeleton-root {
    margin: 16px;
    height: 99px;
    border-radius: 5px;
  }

  .no-result {
    font-size: 20px;
    text-align: center;
    flex: 1;
  }
`;

export default class Home extends React.Component {
  state = {
    loading: true,
    errorMsg: null,
    widgets: [],
    selected: 0,
    search: '',
    searchedWidgets: [],
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get('/api/widgets.json')
      .then(response => {
        const widgets = response.data.widgets;
        this.setState({ loading: false, widgets, searchedWidgets: widgets });
      })
      .catch(error => {
        this.setState({
          loading: false,
          errorMsg: `Error while fetching widgets: ${error.message}`,
        });
      });
  }

  onAddToCart = (widget, quantity) => {
    const { cart, updateCart } = this.props;

    // clone old state
    const newCart = {
      ...cart,
    };

    if (cart[widget.id]) {
      // widget already in cart, update quantity
      newCart[widget.id] = {
        ...newCart[widget.id],
        quantity: newCart[widget.id].quantity + quantity,
      };
    } else {
      // widget not in cart, add to cart
      newCart[widget.id] = {
        widget,
        quantity,
      };
    }

    updateCart(newCart);
  };

  onSearch = e => {
    const search = e.target.value;
    const { widgets } = this.state;

    if (search.trim() === '') {
      this.setState({ search, searchedWidgets: widgets });
    } else {
      const searchedWidgets = widgets.filter(widget => {
        return widget.name.toLowerCase().includes(search.trim().toLowerCase());
      });

      this.setState({ search, searchedWidgets });
    }
  };

  render() {
    const { widgets, searchedWidgets, loading, errorMsg, selected, search } = this.state;
    return (
      <Wrapper className="home-page">
        {errorMsg && <Alert severity="error">{errorMsg}</Alert>}

        <SearchBar value={search} onChange={this.onSearch} />

        <Content>
          <WidgetsList>
            {loading
              ? [...Array(4)].map((_, i) => <Skeleton key={i} variant="rect" />)
              : searchedWidgets.map((widget, i) => (
                  <WidgetCard
                    key={widget.id}
                    name={widget.name}
                    price={widget.price}
                    onClick={() => this.setState({ selected: i })}
                    selected={widgets[selected].id === widget.id}
                  />
                ))}
            {search.trim() !== '' && searchedWidgets.length === 0 && (
              <div className="no-result">No result!</div>
            )}
          </WidgetsList>

          <WidgetDetail
            loading={loading}
            widget={widgets[selected]}
            onAddToCart={this.onAddToCart}
          />
        </Content>
      </Wrapper>
    );
  }
}
