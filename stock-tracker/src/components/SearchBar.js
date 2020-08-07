import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import './components.css';

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const name = useSelector(state => state.companyName);
  const symbol = useSelector(state => state.symbol);

  let placeholder = symbol === "" ? "Please enter a stock symbol" : name + '  (' + symbol + ')'

  const handleSubmit = (e) => {
    dispatch({ type: 'POSSIBLE_RECEIVED', payload: [] })
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

  const onBlurHandler = () => {
    dispatch({ type: 'POSSIBLE_RECEIVED', payload: [] })
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
        onBlur = {onBlurHandler}
        className="search" />
    </form>
  );
}

export default SearchBar;