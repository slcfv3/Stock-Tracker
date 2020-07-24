import React from "react";
import { Sun } from '@styled-icons/boxicons-regular/Sun'
import { RealTimePriceDate, MarketStatus } from '../styled-components/text.js'
import { Row, Col } from '../styled-components/wrappers.js'
const MarketOpen = () => {
    return (
        <div>
            <Row columnGap='15px' >
                <Col>
                    <RealTimePriceDate>Real-Time Price as of July 24, 2020</RealTimePriceDate>
                </Col>
                <Col >
                    <MarketStatus> <Sun color='#ffbb5e' height='14px'/> Market Open </MarketStatus>
                </Col>
            </Row>
        </div>
    )
}

export default MarketOpen;