import React, { useState, useEffect } from 'react';
import Track from './Track';

function Music() {
    const [music, setMusic] = useState([]);

    useEffect(() => {
        const url = 'https://openwhyd.org/hot/electro?format=json';

        fetch(url).then((response) => {
            return response.json()
        }).then((data) => {

            setMusic(data.tracks);
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
        music.map((item) => <Track key={item.uId} item={item} />)

    return (
        <ul>
            {renderItems()}
        </ul>
    );
}

export default Music;

