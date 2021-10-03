import React from 'react';
import { SearchWrap, SearchBar } from '../../global/PageStyles';

const Search = ({ change, value, clicked }) => {
  return (
    <>
      <SearchWrap clicked={clicked}>
        <SearchBar
          onChange={change}
          type='text'
          name='search'
          value={value}
          placeholder='Search...'
        />
      </SearchWrap>
    </>
  );
};

export default Search;
