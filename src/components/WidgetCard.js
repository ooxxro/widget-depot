import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const StyledPaper = styled(Paper)`
  padding: 16px 22px 16px 14px;
  position: relative;
  margin: 16px;
  cursor: pointer;
  color: ${props => props.theme.color};
  &.MuiPaper-root {
    background: ${props => props.theme.cardBg};
    transition: all 0.3s;
    &:hover {
      background: ${props => props.theme.cardHoverBg};
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
  color: ${props => props.theme.color};
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Price = styled.div`
  margin-top: 8px;
  font-weight: light;
  .label {
    font-size: 10px;
    color: ${props => props.theme.colorSecondary};
  }
  .value {
    font-size: 16px;
    color: ${props => props.theme.color};
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
