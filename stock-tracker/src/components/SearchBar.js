import React, { useState } from "react";
import { useDispatch } from 'react-redux'

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Search for " + search.toUpperCase() + " submitted.");
      dispatch({ type: 'SEARCH_SUBMITTED', payload: search.toUpperCase()});
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search:
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default SearchBar;