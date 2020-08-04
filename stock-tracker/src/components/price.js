import React from "react";
import { useSelector } from 'react-redux'
import { StyledPrice, PriceChange } from '../styled-components/price.js'
import { Row, Col } from '../styled-components/wrappers.js'
import { Percent } from '@styled-icons/evaicons-solid/Percent'
import { UpArrowAlt } from '@styled-icons/boxicons-regular/UpArrowAlt'
import { DownArrowAlt } from '@styled-icons/boxicons-regular/DownArrowAlt'
import { Dollar } from '@styled-icons/boxicons-regular/Dollar'
import { DollarIcon } from '../styled-components/icons'
import { UpArrowIcon } from '../styled-components/icons'
import { DownArrowIcon } from '../styled-components/icons'
import { PercentIcon } from '../styled-components/icons'

const Price = (props) => {
    const price = useSelector(state => state.price);
    const priceChange = useSelector(state => state.priceChange)
    const priceChangeDisplay = Math.abs(priceChange).toFixed(2)
    const priceChangePercent = useSelector(state => state.priceChangePercent)
    const priceChangePercentDisplay = Math.abs(priceChangePercent).toFixed(2)
    let arrowIcon;

    if (priceChange < 0) {
        arrowIcon = <DownArrowIcon iconSize={props.fontSize} breakpoint={props.breakpoint} smallBreakpoint={props.smallBreakpoint}/>
    }
    else {
        arrowIcon = <UpArrowIcon iconSize={props.fontSize} breakpoint={props.breakpoint} smallBreakpoint={props.smallBreakpoint}/>
    }

    return (
        <Row justifyContent='flex-end' columnGap='15px'>

            <Row columnGap='0px'>
                    <StyledPrice breakpoint={props.breakpoint} smallBreakpoint={props.smallBreakpoint} fontSize={props.fontSize + 'px'}> <DollarIcon iconSize={props.fontSize} breakpoint={props.breakpoint} smallBreakpoint={props.smallBreakpoint} /> {price.toFixed(2)}  </StyledPrice>
            </Row>

            <Row columnGap='0px'>
                <Col Padding='0 0 0 0'>
                    <PriceChange change={priceChange} breakpoint={props.breakpoint} smallBreakpoint={props.smallBreakpoint} fontSize={props.fontSize + 'px'}>   {arrowIcon}   </PriceChange>
                </ Col>

                <Col BorderRight='solid 1.5px' Padding='0 15px 0 0' BorderColor={priceChange >= 0 ? 'rgba(145, 228, 165, 0.5)' : 'rgba(233, 86, 86, 0.5)'}>
                    <PriceChange change={priceChange} breakpoint={props.breakpoint} smallBreakpoint={props.smallBreakpoint} fontSize={props.fontSize + 'px'}>  {priceChangeDisplay}   </PriceChange>
                </ Col>
            </Row>

            <Row columnGap='0px'>
                <Col>
                    <PriceChange change={priceChange} breakpoint={props.breakpoint} smallBreakpoint={props.smallBreakpoint} fontSize={props.fontSize + 'px'} >   {priceChangePercentDisplay}   </PriceChange>
                </Col>
                <Col>
                    <PriceChange change={priceChange} breakpoint={props.breakpoint} smallBreakpoint={props.smallBreakpoint} fontSize={props.fontSize + 'px'} >   <PercentIcon iconSize={props.fontSize} breakpoint={props.breakpoint} smallBreakpoint={props.smallBreakpoint}/>   </PriceChange>
                </Col>
            </Row>
        </Row>
    );
}

export default Price;