import React from "react";
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import {findHighValue, findLowValue} from '../util'
import './components.css';

const Keystats = () => {
    const stats = useSelector(state => state.keyStats);
    const chartData = state => state.chart
    const openSelector = createSelector(
        chartData,
        (chart) => (chart[1]?.open)
      )
    const lowHighSelector = createSelector(
        chartData,
        (chart) => (findLowValue(chart)+'-'+findHighValue(chart))
      )
    return (
        <div className="keystats">
            <div className="title">KEY STATS</div>
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
        </div>
    );
}

export default Keystats;