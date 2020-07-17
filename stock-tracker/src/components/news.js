import React from "react";
import { useSelector } from 'react-redux'
import {timeAgo} from '../util'
import './components.css';

const News = () => {
    const news = useSelector(state => state.news);
    //console.log('test news'+news[0].headline)
    return (
        <div className="news">
            <ul>
                {news.map((article, index) =>
                    <li>
                        <span>{article.headline}</span>
                        <br></br>
                        <label>{article.source}</label>
                        <label>-{timeAgo(article.datetime)}</label>
                    </li>
                )}
                
            </ul>

        </div>
    );
}

export default News;