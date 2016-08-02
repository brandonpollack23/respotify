import React from 'react';

const AlbumList = (props) => {
    const albums = props.albums.map(album => 
        <li>
            <img src={album.images[1].url} alt="" /><br/>
            {album.name}
        </li>);

    if(props.albums.length != 0) {
        return(
            <ul>
                {albums}
            </ul>
        );
    }
    else if(props.hasSearched) {
        return <p>No Results, please try again!</p>
    }
    else {
        return <p>Please enter a search</p>;
    }
};

AlbumList.propTypes = {
    albums: React.PropTypes.array.isRequired,
    hasSearched: React.PropTypes.bool.isRequired,
};

export default AlbumList;
