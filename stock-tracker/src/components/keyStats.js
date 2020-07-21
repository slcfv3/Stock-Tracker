import React from "react";
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { findHighValue, findLowValue } from '../util'
import './components.css';
import styled from 'styled-components'
import { BlueLine } from '../styled-components/lines.js'
import { Col } from '../styled-components/wrappers.js'
import { SectionTitle } from '../styled-components/text.js'
import { StatLabel, StatValue } from '../styled-components/stats.js'

const Keystats = () => {
    const stats = useSelector(state => state.keyStats);
    const chartData = state => state.chart
    const openSelector = createSelector(
        chartData,
        (chart) => (chart[1]?.open)
    )
    const lowHighSelector = createSelector(
        chartData,
        (chart) => (findLowValue(chart) + '-' + findHighValue(chart))
    )
    return (
        <div className="keystats">
            <SectionTitle>KEY STATS</SectionTitle>
            <BlueLine />
                    <table>
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
                    </table>
        </div>
    );
}

export default Keystats;

/*
            <ul className="leftstats">
                <li>Previous Close{stats.previousClose}</li>
                <li>Day Range{useSelector(lowHighSelector)}</li>
                <li>Volume{stats.iexVolume}</li>
                <li>Market Cap{stats.marketCap}</li>
                <li>P/E Ratio{stats.peRatio}</li>
            </ul>

            <ul className="rightstats">
                <li>Open{useSelector(openSelector)}</li>
                <li>52 Week Range{stats.week52Low+'-'+stats.week52High}</li>
                <li>Total Avg Volume{stats.avgTotalVolume}</li>
                <li>Earnings Per Share{stats.ttmEPS}</li>
                <li>Dividend & Yield{stats.dividendYield}</li>
            </ul>
            */