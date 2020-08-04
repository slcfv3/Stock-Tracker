import React, { useState, useEffect } from "react";
import { createSelector } from 'reselect'
import { useDispatch, useSelector } from 'react-redux'
import { OptionList, Option, SymbolTag, NameTag, ExchangeTag, ExchangeText,TagContainer } from '../styled-components/dropdown.js'

const DropDown = () => {
  
  
  const dispatch = useDispatch();
  
  const possible = useSelector(state => state.possible)
  
  
  const onClick = (symbol) =>{
    dispatch({ type: 'SEARCH_SUBMITTED', payload: symbol });
    
  }

  if(possible.length) {
    return(
      <OptionList>
        {possible.map((optionName, index) => {
         
          return (
            <Option key={optionName.symbol} onClick={()=>onClick(optionName.symbol)} >
              <SymbolTag>{optionName.symbol}</SymbolTag> <TagContainer><NameTag>{optionName.securityName}</NameTag> <ExchangeText>{optionName.exchange}</ExchangeText><ExchangeTag></ExchangeTag></TagContainer>
            </Option>
          );
        })}
      </OptionList>
    );
  } else {
    return(
      <div className="no-options">
        
      </div>
    );
  }
  
}

export default DropDown;