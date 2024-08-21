// src/components/SearchBar.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchWidgets } from '../store/actions';

function SearchBar() {
  const dispatch = useDispatch();
  const searchQuery = useSelector(state => state.searchQuery);

  const handleSearch = (e) => {
    dispatch(searchWidgets(e.target.value));
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search widgets..."
      />
    </div>
  );
}

export default SearchBar;
