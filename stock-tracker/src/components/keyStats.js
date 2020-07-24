import React from "react";
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { findHighValue, findLowValue } from '../util'
import './components.css';
import { BlueLine } from '../styled-components/lines.js'
import { Row, Col } from '../styled-components/wrappers.js'
import { SectionTitle } from '../styled-components/text.js'
import { StatTable, StatLabel, StatValue } from '../styled-components/stats.js'

const Keystats = () => {
    const stats = useSelector(state => state.keyStats);
    const chartData = state => state.chart
    const openSelector = createSelector(
        chartData,
        (chart) => (chart[1]?.open)
    )
    const lowHighSelector = createSelector(
        chartData,
        (chart) => (findLowValue(chart) && findHighValue(chart)) ? (findLowValue(chart) + '-' + findHighValue(chart)) : ''
    )
    return (
        <div className="keystats">
            <SectionTitle>KEY STATS</SectionTitle>
            <BlueLine />
            <Row>
                <Col size={1}>
                    <StatTable>
                        <tr>
                            <StatLabel> Previous Close </StatLabel>
                            <StatValue> {stats.previousClose} </ StatValue>
                        </tr>
                        <tr>
                            <StatLabel> Day Range </StatLabel>
                            <StatValue> {useSelector(lowHighSelector)} </ StatValue>
                        </tr>
                        <tr>
                            <StatLabel> Volume </StatLabel>
                            <StatValue> {stats.iexVolume} </ StatValue>
                        </tr>
                        <tr>
                            <StatLabel> Market Cap </StatLabel>
                            <StatValue> {stats.marketCap} </ StatValue>
                        </tr>
                        <tr>
                            <StatLabel> P/E Ratio </StatLabel>
                            <StatValue> {stats.peRatio} </ StatValue>
                        </tr>
                    </StatTable>
                </Col>
                <Col size={1}>
                    <StatTable>
                        <tbody>
                            <tr>
                                <StatLabel> Open </StatLabel>
                                <StatValue> {useSelector(openSelector)} </ StatValue>
                            </tr>
                            <tr>
                                <StatLabel> 52 Week Range </StatLabel>
                                <StatValue> {(stats.week52Low && stats.week52High) ? stats.week52Low + '-' + stats.week52High : ''} </ StatValue>
                            </tr>
                            <tr>
                                <StatLabel> Total Avg Volume </StatLabel>
                                <StatValue> {stats.avgTotalVolume} </ StatValue>
                            </tr>
                            <tr>
                                <StatLabel> Earnings Per Share </StatLabel>
                                <StatValue> {stats.ttmEPS} </ StatValue>
                            </tr>
                            <tr>
                                <StatLabel> Dividend & Yield </StatLabel>
                                <StatValue> {stats.dividendYield} </ StatValue>
                            </tr>
                        </tbody>
                    </StatTable>
                </Col>
            </Row>
        </div>
    );
}

export default Keystats;