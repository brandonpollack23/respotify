import React from 'react';
import './album.css';

const Album = (props) => {
    return (
        <li>
            <img
                src={props.album.images[1].url} 
                onClick={() => props.getTracks(props.album.id)}
            />
            <p className="album_name">{props.album.name}</p>
        </li>
    );
}

Album.propTypes = {
    album: React.PropTypes.object.isRequired,
    getTracks: React.PropTypes.func.isRequired,
};

export default Album;
