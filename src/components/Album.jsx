import React from 'react';
import './album.css';

const Album = (props) => {
    return (
        <li>
            <img
                src={props.album.images[1].url} />
            <p className="album_name">{props.album.name}</p>
        </li>
    );
}

Album.propTypes = {
    album: React.PropTypes.object.isRequired,
};

export default Album;
