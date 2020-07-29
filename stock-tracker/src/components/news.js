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
            <NewsList data-testid='newslist'>
                {news.map((article, index) =>
                    <ListItem>
                        <Headline data-testid={'headline'+index}>{article.headline}</ Headline>                    
                        <ArticleLabel data-testid={'tag'+index}>{unixToTimePassed(article.datetime)} - {article.source}</ArticleLabel>
                    </ListItem>
                )}

            </NewsList>

        </div>
    );
}

export default News;