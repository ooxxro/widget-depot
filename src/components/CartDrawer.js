import React from 'react';
import styled from 'styled-components';
import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import { IconButton } from '@material-ui/core';

const Wrapper = styled.div`
  width: 360px;
  position: relative;
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
  height: 100%;

  h2 {
    margin: 1rem 1rem 0;
  }
  .close {
    position: absolute;
    top: 5px;
    right: 5px;
    color: ${props => props.theme.color};
  }
  .empty {
    text-align: center;
  }

  .total {
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    .value {
      font-weight: bold;
      font-size: 20px;
    }
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  background: ${props => props.theme.cardBg};
  color: ${props => props.theme.color};
  padding: 0.8rem;
  margin: 0.5rem 1rem;
  border-radius: 5px;

  img {
    flex: 0 0 auto;
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 10px;
  }
  .content {
    flex: 1;
    padding: 0.5rem;
    font-size: 13px;
    color: ${props => props.theme.colorSecondary};
    overflow: hidden;
  }
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    h3 {
      font-size: 15px;
      text-transform: uppercase;
      font-weight: bold;
      color: ${props => props.theme.color};
      margin: 0;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .quantity {
    display: inline-block;
    margin-right: 5px;
    color: ${props => props.theme.colorSecondary};
  }
  .price {
    display: inline-block;
    margin-left: 5px;
    color: ${props => props.theme.colorError};
    font-weight: bold;
  }
  .remove {
    color: ${props => props.theme.colorSecondary};
  }
`;

export default function CartDrawer({ open, onClose, cart, updateCart }) {
  const onRemove = id => {
    // clone old state
    const newCart = { ...cart };
    delete newCart[id];
    updateCart(newCart);
  };

  let total = 0;
  Object.values(cart).forEach(({ widget, quantity }) => {
    total += widget.price * quantity;
  });

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Wrapper>
        <IconButton className="close" aria-label="close cart drawer" onClick={onClose}>
          <CloseIcon />
        </IconButton>

        <h2>Cart</h2>

        {Object.values(cart).length === 0 && <p className="empty">Your cart is empty</p>}

        {Object.values(cart).map(({ widget, quantity }) => (
          <Card key={widget.id}>
            <img src={widget.mainImg} alt="widget" />
            <div className="content">
              <div className="top">
                <h3>{widget.name}</h3>
              </div>
              <span className="quantity">{quantity}</span>
              &times;
              <span className="price">${widget.price}</span>
            </div>
            <IconButton
              className="remove"
              aria-label="remove from cart"
              onClick={() => onRemove(widget.id)}
              size="small"
            >
              <DeleteIcon />
            </IconButton>
          </Card>
        ))}

        <div className="total">
          <span className="label">Total</span>
          <span className="value">${total}</span>
        </div>
      </Wrapper>
    </Drawer>
  );
}
