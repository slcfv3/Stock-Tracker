import React, { useState, useEffect } from "react";
import { createSelector } from 'reselect'
import { useDispatch, useSelector } from 'react-redux'
import { OptionList, Option, SymbolTag, NameTag, ExchangeTag, ExchangeText,TagContainer,DropdownBody } from '../styled-components/dropdown.js'

const DropDown = (props) => {
  
  
  const dispatch = useDispatch();
  
  const possible = useSelector(state => state.possible)
  
  
  const onClick = (symbol) =>{
    dispatch({ type: 'SEARCH_SUBMITTED', payload: symbol });
    
  }

  if(possible.length) {
    return(
        <DropdownBody>
            <OptionList xlgbreakpoint={props.xlgbreakpoint} lgbreakpoint={props.lgbreakpoint} breakpoint={props.breakpoint}>
                {possible.map((optionName, index) => {
                
                return (
                    <Option key={optionName.symbol} onClick={()=>onClick(optionName.symbol)} >
                    <SymbolTag>{optionName.symbol}</SymbolTag> <TagContainer><NameTag breakpoint={props.smallBreakpoint}>{optionName.securityName}</NameTag> <ExchangeText breakpoint={props.breakpoint}>{optionName.exchange}</ExchangeText><ExchangeTag breakpoint={props.breakpoint}></ExchangeTag></TagContainer>
                    </Option>
                );
                })}
            </OptionList>
        </DropdownBody>
    );
  } else {
    return(
        <DropdownBody>
          <OptionList xlgbreakpoint={props.xlgbreakpoint} lgbreakpoint={props.lgbreakpoint} breakpoint={props.breakpoint}>
          </OptionList>
        </DropdownBody>
    );
  }
  
}

export default DropDown;