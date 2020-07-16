import React from "react";
import { useSelector } from 'react-redux'
import './components.css';

const Price = () => {
    const price = useSelector(state => state.price);
    
    return (
        <div className="pricetags">
            <label>{price}</label>
        </div>
    );
}

export default Price;