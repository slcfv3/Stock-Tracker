import React from "react";
import { useSelector } from 'react-redux'
import './components.css';
import { SectionTitle, CompanyName, CompanyWebsite, CompanyDescription } from '../styled-components/text.js'
import { BlueLine } from '../styled-components/lines.js'

const Overview = () => {
    const overview = useSelector(state => state.overview);
    console.log('test overview'+JSON.stringify(overview))
    return (
        <div>
           <SectionTitle>COMPANY OVERVIEW</SectionTitle>
           <BlueLine />
           <CompanyName>{(overview.companyName && overview.symbol) ? overview.companyName+'('+overview.symbol+')' : ''}</CompanyName> 
            <CompanyWebsite>{overview.website}</CompanyWebsite>
            <CompanyDescription>{overview.description}</CompanyDescription>
        </div>
    );
}

export default Overview;