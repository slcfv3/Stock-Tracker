import React from "react";
import { StockTag } from '../styled-components/buttons.js'
import { Row, Col } from '../styled-components/wrappers.js'

const StockTags = () => {

    return (
        <div>
            <StockTag>NASDAQ</StockTag>
            <StockTag>TECHNOLOGY</StockTag>
            <StockTag>USD</StockTag>
        </div>
    );
}

export default StockTags;