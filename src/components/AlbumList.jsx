import React from 'react';
import LoadingBar from './LoadingBar';
import Album from './Album';
import './albumlist.css';

const AlbumList = (props) => {
    const albums = props.albums.map(album => 
        <Album key={album.id} album={album} />);

    if(props.searching) {
        return <LoadingBar />; 
    }
    else if(props.albums.length != 0) {
        return(
            <div className="col-md-4" id="albumlist_sect"> 
                <ul id="albumlist">
                    {albums}
                </ul>
            </div>
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
    searching: React.PropTypes.bool.isRequired,
};

export default AlbumList;
