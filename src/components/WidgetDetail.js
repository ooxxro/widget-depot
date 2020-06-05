import React from 'react';
import styled from 'styled-components';
import { IconButton, Tooltip } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AddToCartDialog from './AddToCartDialog';

const Wrapper = styled.div`
  width: 100%;
  padding: 20px 24px;
  margin-left: 20px;
  border: 1.5px solid #e1e1e1;
  border-radius: 10px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  .name {
    flex: 1;
    margin-right: 1rem;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
  }
  .MuiSvgIcon-root {
    font-size: 20px;
  }
`;
const ImageWrapper = styled.div`
  display: block;
  margin: 20px 40px 30px;
  img {
    width: 100%;
    height: auto;
    display: block;
  }
  .MuiSkeleton-root {
    height: 240px;
  }
`;
const Spec = styled.div`
  border-top: 1.1px solid #ddd;
  padding-top: 8px;
  h2 {
    padding-left: 14px;
    font-size: 14px;
    font-weight: bold;
    .MuiSkeleton-root {
      width: 120px;
    }
  }
`;
const Format = styled.div`
  display: flex;
  justify-content: center;
  .spec-item {
    margin: 2px 40px 20px;
    text-align: center;
    .value {
      font-size: 17px;
      margin-bottom: 10px;
    }
    .label {
      font-size: 9px;
      color: #555;
    }
  }
  .MuiSkeleton-root {
    height: 100px;
    width: 60%;
    margin-bottom: 30px;
  }
`;

const Intro = styled.div`
  border-top: 1.1px solid #ddd;
  padding: 30px 40px;
  font-size: 12px;
  color: #ababab;
`;

export default class WidgetDetail extends React.Component {
  state = {
    cartDialogOpen: false,
  };

  onAddToCart = quantity => {
    const { widget, onAddToCart } = this.props;

    onAddToCart(widget, quantity);

    this.setState({ cartDialogOpen: false });
  };

  render() {
    const { loading, widget } = this.props;
    const { cartDialogOpen } = this.state;

    return (
      <Wrapper>
        <Header>
          <div className="name">{loading ? <Skeleton /> : widget.name}</div>
          {loading ? (
            <Skeleton variant="circle" width={40} height={40} />
          ) : (
            <Tooltip title="Add to cart">
              <IconButton
                aria-label="add to cart"
                onClick={() => this.setState({ cartDialogOpen: true })}
              >
                <AddShoppingCartIcon />
              </IconButton>
            </Tooltip>
          )}
        </Header>
        <ImageWrapper>
          {loading ? <Skeleton variant="rect" /> : <img src={widget.mainImg} alt="widget" />}
        </ImageWrapper>
        <Spec>
          <h2>{loading ? <Skeleton /> : 'Specifications'}</h2>
          <Format>
            {loading ? (
              <Skeleton variant="rect" />
            ) : (
              <>
                <div className="spec-item">
                  <div className="value">
                    {widget.specs.dimensions.map(x => x + '"').join(' x ')}
                  </div>
                  <div className="label">Dimansions</div>
                </div>
                <div className="spec-item">
                  <div className="value">
                    {widget.specs.weight.value}
                    {widget.specs.weight.unit}
                  </div>
                  <div className="label">Weight</div>
                </div>
                <div className="spec-item">
                  <div className="value">
                    {widget.specs.capacity.value}
                    {widget.specs.capacity.unit}
                  </div>
                  <div className="label">Capacity</div>
                </div>
              </>
            )}
          </Format>
        </Spec>
        <Intro>{loading ? <Skeleton variant="rect" height={300} /> : widget.intro}</Intro>

        {/* add to cart dialog */}
        {widget && (
          <AddToCartDialog
            key={widget.id}
            open={cartDialogOpen}
            onClose={() => this.setState({ cartDialogOpen: false })}
            widget={widget}
            onAdd={this.onAddToCart}
          />
        )}
      </Wrapper>
    );
  }
}
