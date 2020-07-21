import React, { useState, useEffect } from 'react';
import NewSingle from './NewSingle';

function News() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=40943d695f454e3f8c3492928a561f21';

        fetch(url).then((response) => {
            return response.json();
        }).then((data) => {
            setNews(data.articles);
        })
            .catch((error) => console.error(error));
    }, [])


    // const componentDidMount = () => {
    //     const url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=40943d695f454e3f8c3492928a561f21';

    //     fetch(url).then((response) => {
    //         return response.json();
    //     }).then((data) => {
    //         setNews(data.articles);
    //     })
    //         .catch((error) => console.error(error));
    // }

    const renderItems = () =>
        news.map((item) => <NewSingle key={item.id} item={item} />)

    return (
        <ul>
            {renderItems()}
        </ul>
    );
}

export default News;

