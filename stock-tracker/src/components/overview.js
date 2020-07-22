import React from "react";
import { useSelector } from 'react-redux'
import './components.css';
import { SectionTitle } from '../styled-components/text.js'
import { BlueLine } from '../styled-components/lines.js'

const Overview = () => {
    const overview = useSelector(state => state.overview);
    console.log('test overview'+JSON.stringify(overview))
    return (
        <div className="overview">
           <SectionTitle>COMPANY OVERVIEW</SectionTitle>
           <BlueLine />
           <div>{overview.companyName+'('+overview.symbol+')'}</div> 
            <div>{overview.website}</div>
            <div className="overviewtext">{overview.description}</div>
        </div>
    );
}

export default Overview;