import React from "react";
import { useSelector } from 'react-redux'
import './components.css';

const Keystats = () => {
    const stats = useSelector(state => state.keyStats);
    
    return (
        <div className="keystats">
            <ul className="leftstats">
                <li>Previous Close{stats.previousClose}</li>
                <li>Day Range{stats.low+'-'+stats.high}</li>
                <li>Volume{stats.iexVolume}</li>
                <li>Market Cap{stats.marketCap}</li>
                <li>P/E Ratio{stats.peRatio}</li>
            </ul>

            <ul className="rightstats">
                <li>Open{stats.open}</li>
                <li>52 Week Range{stats.week52Low+'-'+stats.week52High}</li>
                <li>Total Avg Volume{stats.avgTotalVolume}</li>
                <li>Earnings Per Share{stats.ttmEPS}</li>
                <li>Dividend & Yield{stats.dividendYield}</li>
            </ul>
        </div>
    );
}

export default Keystats;