import React from 'react';
import NewSingle from './NewSingle';

function News({ items }) {
    const renderItems = (items) =>
        items.map((item) => <NewSingle key={item.id} item={item} />)

    return (
        <ul>
            {renderItems}
        </ul>
    );
}

export default News;

