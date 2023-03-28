import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { observer } from 'mobx-react-lite';
import * as Styled from './searchBox.styles';

export const SearchBox = observer(() => {
  //   const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     moviesStore.setFilter(event.target.value);
  //   };
  return (
    <Styled.Search>
      <Styled.SearchIconWrapper>
        <SearchIcon />
      </Styled.SearchIconWrapper>
      <Styled.StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
    </Styled.Search>
  );
});
