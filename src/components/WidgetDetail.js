import React from 'react';
import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const Wrapper = styled.div`
  padding: 20px 24px;
  margin-left: 20px;
  border: 1.5px solid #e1e1e1;
  border-radius: 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .name {
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
  }
  .MuiSvgIcon-root {
    font-size: 20px;
  }
`;
const Image = styled.div`
  margin: 20px auto;
  width: 400px;
  height: 200px;
  background: #ddd;
`;
const Spec = styled.div`
  border-top: 1.1px solid #ddd;
  padding-top: 8px;
  h2 {
    padding-left: 14px;
    font-size: 14px;
    font-weight: bold;
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
`;

const Intro = styled.div`
  border-top: 1.1px solid #ddd;
  padding: 30px 40px;
  font-size: 12px;
  color: #ababab;
`;

export default class WidgetDetail extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <div className="name"> Widget 1</div>
          <IconButton
            aria-label="add to cart"
            // onClick={}
          >
            <AddShoppingCartIcon />
          </IconButton>
        </Header>
        <Image></Image>
        <Spec>
          <h2>Specifications</h2>
          <Format>
            <div className="spec-item">
              <div className="value">14" x 20" x 5"</div>
              <div className="label">Dimansions</div>
            </div>
            <div className="spec-item">
              <div className="value">41lbs</div>
              <div className="label">Weight</div>
            </div>
            <div className="spec-item">
              <div className="value">10L</div>
              <div className="label">Capacity</div>
            </div>
          </Format>
        </Spec>
        <Intro>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit odio consectetur
          voluptatibus id delectus beatae sint aspernatur et, natus, minima eos deleniti rem aliquid
          amet enim fuga, hic corrupti autem! Enim adipisci, impedit dolore corporis veniam eos.
          Quas saepe impedit iusto rem porro ipsa, ea itaque eum natus eaque cupiditate pariatur
          necessitatibus dolores, optio expedita voluptatum similique dicta molestiae voluptatibus.
          Dolore, praesentium? Quis id ratione, accusamus praesentium, recusandae facere totam
          dolore illum, odit iste dignissimos reprehenderit? Voluptatibus, adipisci sint molestias
          repellendus eaque minima omnis quisquam quas aspernatur, ex atque similique! Ipsum illum
          commodi debitis facere, fuga rerum ab quibusdam totam! Nulla nihil reiciendis, repellat
          earum, error eligendi esse necessitatibus nobis excepturi minus eos corrupti, odit
          aliquid! At sit aspernatur magnam.
        </Intro>
      </Wrapper>
    );
  }
}
