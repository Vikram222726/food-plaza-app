import React from 'react';

const URLS = ({item, id}) =>{
    return(
        <a
            href={item.data.hits[id-1].recipe.url}
            target="_blank"
            rel="noopener noreferrer"
        >
        url</a>
    )
}

export default URLS;