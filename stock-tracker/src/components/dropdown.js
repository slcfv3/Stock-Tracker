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

  const onBlurHandler = () => {
    dispatch({ type: 'POSSIBLE_RECEIVED', payload: [] })
  }

  if(possible.length) {
    return(
        <DropdownBody xlgbreakpoint={props.xlgbreakpoint} lgbreakpoint={props.lgbreakpoint} breakpoint={props.breakpoint} smallBreakpoint={props.smallBreakpoint}>
            <OptionList xlgbreakpoint={props.xlgbreakpoint} lgbreakpoint={props.lgbreakpoint} breakpoint={props.breakpoint}>
                {possible.map((optionName, index) => {
                
                return (
                    <Option key={optionName.symbol} onMouseDown={()=>onClick(optionName.symbol)} onBlur={() => onBlurHandler}>
                    <SymbolTag>{optionName.symbol}</SymbolTag> <TagContainer><NameTag breakpoint={props.smallBreakpoint}>{optionName.securityName}</NameTag> <ExchangeText breakpoint={props.breakpoint}>{optionName.exchange}</ExchangeText><ExchangeTag breakpoint={props.breakpoint}></ExchangeTag></TagContainer>
                    </Option>
                );

                })}
            </OptionList>
        </DropdownBody>
    );
  } else {
    return(
        <DropdownBody xlgbreakpoint={props.xlgbreakpoint} lgbreakpoint={props.lgbreakpoint} breakpoint={props.breakpoint} smallBreakpoint={props.smallBreakpoint}>
          <OptionList xlgbreakpoint={props.xlgbreakpoint} lgbreakpoint={props.lgbreakpoint} breakpoint={props.breakpoint}>
          </OptionList>
        </DropdownBody>
    );
  }
  
}

export default DropDown;