import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const StyledPaper = styled(Paper)`
  padding: 16px 22px 16px 14px;
  position: relative;
  margin: 16px;
  cursor: pointer;
  &.MuiPaper-root {
    background: #f5f5f5;
    transition: all 0.3s;
    &:hover {
      background: #eee;
      transform: translateY(-3px);
      .arrow {
        color: #888;
      }
    }
  }
  .arrow {
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
    font-size: 14px;
    color: #bcbcbc;
    transition: all 0.3s;
  }
`;
const Name = styled.div`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`;
const Price = styled.div`
  margin-top: 8px;
  font-weight: light;
  .label {
    font-size: 10px;
    color: #aaaaaa;
  }
  .value {
    font-size: 16px;
  }
`;

export default function WidgetCard({ name, price, ...props }) {
  return (
    <StyledPaper {...props}>
      <Name>{name}</Name>
      <Price>
        <div className="label">Price</div>
        <div className="value">${price}</div>
      </Price>
      <ArrowForwardIosIcon className="arrow" />
    </StyledPaper>
  );
}
