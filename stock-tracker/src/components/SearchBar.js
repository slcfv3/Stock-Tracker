import React, { useState, useEffect } from "react";
import { createSelector } from 'reselect'
import { useDispatch, useSelector } from 'react-redux'
import './components.css';
import { Row, Col } from '../styled-components/wrappers.js'

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const name = useSelector(state => state.companyName);
  const symbol = useSelector(state => state.symbol);

  let placeholder = symbol === "" ? "Please enter a stock symbol" : name + '  (' + symbol + ')'

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.toUpperCase() !== symbol && search !== "") {
      dispatch({ type: 'SEARCH_SUBMITTED', payload: search.toUpperCase() });
      console.log("Search for " + search.toUpperCase() + " submitted.");
    }
    else if (search.toUpperCase() === symbol) {
      setSearch('')
    }
  }

  useEffect(() => {
    setSearch('')
  }, [placeholder])

  const onChange = (e) => {
    setSearch(e.target.value)
    
  }

  let typingTimer;                //timer identifier
  let doneTypingInterval = 500;  //time in ms
  
  const onkeydown = (e) => {
    
    clearTimeout(typingTimer);
    
  }

  const onkeyup = (e) => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(()=>dispatch({ type: 'SEARCH_ENTERED', payload: search.toUpperCase() }), doneTypingInterval);
      
  }


  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder={placeholder}
        type="text"
        value={search}
        onChange={onChange}
        onKeyDown = {onkeydown}
        onKeyUp = {onkeyup}
        className="search" />
    </form>
  );
}

export default SearchBar;