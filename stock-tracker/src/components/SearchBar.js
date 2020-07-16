import React, { useState } from "react";
import { createSelector } from 'reselect'
import { useDispatch, useSelector } from 'react-redux'
import './components.css';

const SearchBar = () => {
  const [search, setSearch] = useState("");
  //const [placeholder, setPlaceholder] = useState("Please enter a stock symbol");
  const dispatch = useDispatch();
  const name = state => state.companyName;
  const symbol = state => state.symbol;
  const reduxState = useSelector(state => state)
  const placeholder = createSelector(
    name,
    symbol,
    (name, symbol) => (name+'  ('+symbol+')')
  )
  

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Search for " + search.toUpperCase() + " submitted.");
      dispatch({ type: 'SEARCH_SUBMITTED', payload: search.toUpperCase()});
      setSearch('')
  }

  return (
    <form onSubmit={handleSubmit} className="wrapper">
      <input className="search-icon" type="image" src="../images/search.png" alt="Submit" />
      <input placeholder={placeholder(reduxState)}
            type="text" 
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="search"/>
    </form>
  );
}

export default SearchBar;