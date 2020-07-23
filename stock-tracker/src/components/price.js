import React from "react";
import { useSelector } from 'react-redux'
import { StyledPrice, PriceChange, PercentChange } from '../styled-components/price.js'
import { Row, Col } from '../styled-components/wrappers.js'
import { Percent } from '@styled-icons/evaicons-solid/Percent'
import { UpArrowAlt } from '@styled-icons/boxicons-regular/UpArrowAlt'
import { DownArrowAlt } from '@styled-icons/boxicons-regular/DownArrowAlt'
import { Dollar } from '@styled-icons/boxicons-regular/Dollar'

const Price = () => {
    const price = useSelector(state => state.price);
    const priceChange = useSelector(state => state.priceChange)
    const priceChangeDisplay = Math.abs(priceChange).toFixed(2)
    const priceChangePercent = useSelector(state => state.priceChangePercent)
    const priceChangePercentDisplay = Math.abs(priceChangePercent).toFixed(2)
    let arrowIcon;
    if (priceChange < 0) {
        arrowIcon = <DownArrowAlt size='25px'/>
    }
    else {
        arrowIcon = <UpArrowAlt  size='25px'/>
    }

    return (
            <Row  justifyContent='flex-end' columnGap='25px'>
                <Col >
                    <StyledPrice> <Dollar size='25px'/>{price.toFixed(2)} </StyledPrice>
                </ Col>
                <Col >
                    <PriceChange change={priceChange}>{arrowIcon}{priceChangeDisplay} {priceChangePercentDisplay}<Percent size='20px'/> </PriceChange>
                </ Col>
            </Row>
    );
}

export default Price;