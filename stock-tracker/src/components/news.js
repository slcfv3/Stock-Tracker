import React from "react";
import { useSelector } from 'react-redux'
import {unixToTimePassed} from '../util'
import './components.css';

const News = () => {
    const news = useSelector(state => state.news);
    //console.log('test news'+news[0].headline)
    return (
        <div className="news">
            <div className="title">LATEST NEWS</div>
            <ul>
                {news.map((article, index) =>
                    <li>
                        <p className="newstext">{article.headline}</p>
                        <label>{article.source}</label>
                        <label>-{unixToTimePassed(article.datetime)}</label>
                    </li>
                )}
                
            </ul>

        </div>
    );
}

export default News;