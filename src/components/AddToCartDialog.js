import React from 'react';
import styled from 'styled-components';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
  TextField,
} from '@material-ui/core';

const Wrapper = styled.div`
  background: ${props => props.theme.cardBg};
  color: ${props => props.theme.color};
  .MuiInputBase-root {
    color: ${props => props.theme.color};
  }
  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: ${props => props.theme.colorSecondary};
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: ${props => props.theme.colorSecondary};
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${props => props.theme.colorPrimary};
  }

  .MuiButton-textPrimary {
    color: ${props => props.theme.colorPrimary};
  }
`;

const CartQuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  .label {
    font-size: 14px;
    margin-right: 10px;
  }
`;

export default class AddToCartDialog extends React.Component {
  state = {
    quantity: 1,
  };

  onAdd = () => {
    const { onAdd } = this.props;
    const { quantity } = this.state;

    onAdd(quantity);

    this.setState({ quantity: 1 });
  };

  render() {
    const { open, onClose, widget } = this.props;
    const { quantity } = this.state;

    return (
      <Dialog open={open} onClose={onClose} aria-labelledby="cart-dialog-title">
        <Wrapper>
          <DialogTitle id="cart-dialog-title">{widget.name}</DialogTitle>
          <DialogContent>
            <CartQuantityWrapper>
              {/* <IconButton
                // onClick={}
                >
                  -
                </IconButton> */}
              <span className="label">Quantity: </span>
              <TextField
                id="cart-quantity"
                type="number"
                InputProps={{
                  inputProps: {
                    min: 1,
                  },
                }}
                variant="outlined"
                size="small"
                autoFocus
                value={quantity}
                onChange={e => this.setState({ quantity: parseInt(e.target.value, 10) })}
              />
              {/* <IconButton
                // onClick={}
                >
                  +
                </IconButton> */}
            </CartQuantityWrapper>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.onAdd} color="primary">
              Add
            </Button>
          </DialogActions>
        </Wrapper>
      </Dialog>
    );
  }
}
