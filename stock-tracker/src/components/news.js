import React from "react";
import { useSelector } from 'react-redux'
import { unixToTimePassed } from '../util'
import { BlueLine } from '../styled-components/lines.js'
import { SectionTitle } from '../styled-components/text.js'
import { Headline, NewsList, ListItem, ArticleLabel } from '../styled-components/news.js'

const News = () => {
    const news = useSelector(state => state.news);
    return (
        <div className="news">
            <SectionTitle>LATEST NEWS</SectionTitle>
            <BlueLine />
            <NewsList>
                {news.map((article, index) =>
                    <ListItem>
                        <Headline>{article.headline}</ Headline>                    
                        <ArticleLabel>{unixToTimePassed(article.datetime)} - {article.source}</ArticleLabel>
                    </ListItem>
                )}

            </NewsList>

        </div>
    );
}

export default News;