import React from 'react';

const Search = (props) => {
    return (
        <div className="search_container">
            <h2>Search ypu artists</h2>
            <input type="text" onChange={event => props.keywords(event)} />
        </div>
    )
}

export default Search;