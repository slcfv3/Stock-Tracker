import React, { useState, useEffect } from "react";
import { createSelector } from 'reselect'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from '../styled-components/wrappers.js'
import './components.css';
import { SearchAlt2 } from '@styled-icons/boxicons-regular/SearchAlt2'

const SearchBar = () => {
  const [search, setSearch] = useState("");
  //const [placeholder, setPlaceholder] = useState("Please enter a stock symbol");
  const dispatch = useDispatch();
  const name = state => state.companyName;
  const symbol = state => state.symbol;
  const placeholderSelector = createSelector(
    name,
    symbol,
    (name, symbol) => {
      if (symbol === "") {
        return "Please enter a stock symbol"
      }
      else {
        return (name + '  (' + symbol + ')')
      }
    }
  )
  const placeholder = useSelector(placeholderSelector)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search for " + search.toUpperCase() + " submitted.");
    dispatch({ type: 'SEARCH_SUBMITTED', payload: search.toUpperCase() });

  }

  useEffect(() => {
    setSearch('')
  }, [placeholder])

  return (

    <form onSubmit={handleSubmit}>
      <input
        placeholder={placeholder}
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="search" />
    </form>
  );
}

export default SearchBar;

//       <input className="search-icon" type="image" src="../images/search.png" alt="Submit" />