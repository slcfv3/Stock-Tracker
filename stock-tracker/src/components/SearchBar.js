import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import './components.css';

const SearchBar = () => {
  const [search, setSearch] = useState("");
  //const [placeholder, setPlaceholder] = useState("Apple Inc (AAPL)");
  const dispatch = useDispatch();
  const name = useSelector(state => state.companyName);
  const symbol = useSelector(state => state.symbol);
  
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Search for " + search.toUpperCase() + " submitted.");
      dispatch({ type: 'SEARCH_SUBMITTED', payload: search.toUpperCase()});
      setSearch('')
  }

  return (
    <form onSubmit={handleSubmit} className="wrapper">
      <input className="search-icon" type="image" src="../images/search.png" alt="Submit" />
      <input placeholder={name+'  ('+symbol+')'}
            type="text" 
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="search"/>
    </form>
  );
}

export default SearchBar;