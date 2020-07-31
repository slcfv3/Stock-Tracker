import React from "react";
import { useSelector } from 'react-redux'
import { StyledPrice, PriceChange } from '../styled-components/price.js'
import { Row, Col } from '../styled-components/wrappers.js'
import { Percent } from '@styled-icons/evaicons-solid/Percent'
import { UpArrowAlt } from '@styled-icons/boxicons-regular/UpArrowAlt'
import { DownArrowAlt } from '@styled-icons/boxicons-regular/DownArrowAlt'
import { Dollar } from '@styled-icons/boxicons-regular/Dollar'

const Price = (props) => {
    const price = useSelector(state => state.price);
    const priceChange = useSelector(state => state.priceChange)
    const priceChangeDisplay = Math.abs(priceChange).toFixed(2)
    const priceChangePercent = useSelector(state => state.priceChangePercent)
    const priceChangePercentDisplay = Math.abs(priceChangePercent).toFixed(2)
    let arrowIcon;

    if (priceChange < 0) {
        arrowIcon = <DownArrowAlt size={2 * props.fontSize / 3} />
    }
    else {
        arrowIcon = <UpArrowAlt size={2 * props.fontSize / 3} />
    }

    return (
        <Row justifyContent='flex-end' columnGap='15px'>

            <Col >
                <StyledPrice fontSize={props.fontSize + 'px'}> <Dollar size={2 * props.fontSize / 3} />  {price.toFixed(2)}  </StyledPrice>
            </ Col>

            <Col BorderRight='solid 1.5px' Padding='0 15px 0 0' BorderColor={priceChange >= 0 ? 'rgba(145, 228, 165, 0.5)' : 'rgba(233, 86, 86, 0.5)'}>
                <PriceChange change={priceChange} fontSize={props.fontSize + 'px'}>   {arrowIcon} {priceChangeDisplay}   </PriceChange>
            </ Col>

            <Col>
                <PriceChange change={priceChange} fontSize={props.fontSize + 'px'}>   {priceChangePercentDisplay} <Percent size={2 * props.fontSize / 3} />   </PriceChange>
            </Col>

        </Row>
    );
}

export default Price;