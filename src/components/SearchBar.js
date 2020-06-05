import React from 'react';
import styled from 'styled-components';
import { TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const StyledTextField = styled(TextField)`
  width: 100%;
  overflow: hidden;
  background: ${props => props.theme.cardBg};
  border-radius: 4px;
  .MuiInputBase-root {
    color: ${props => props.theme.color};

    .MuiOutlinedInput-notchedOutline {
      border: 0;
    }
  }
  .search {
    color: ${props => props.theme.color};
  }
`;

export default function SearchBar({ ...props }) {
  return (
    <StyledTextField
      {...props}
      id="outlined-basic"
      placeholder="Find the widget of your dreams"
      variant="outlined"
      size="small"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}
