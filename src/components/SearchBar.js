import React from 'react';
import styled from 'styled-components';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const StyledTextField = styled(TextField)`
  width: 100%;
  overflow: hidden;
`;

export default class SearchBar extends React.Component {
  render() {
    return (
      <StyledTextField
        id="outlined-basic"
        placeholder="Find the widget of your dreams"
        variant="outlined"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                // onClick={}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    );
  }
}
