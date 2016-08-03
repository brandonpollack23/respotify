import React from 'react';
import Track from './Track';
import './tracklist.css';

const TrackList = (props) => {
    const tracks = props.tracks.map(track =>
        <Track key={track.id} track={track} playPreview={props.playPreview}/>);

    return (
        <div id="tracklist" className="col-md-4">
            <ul>{tracks}</ul>
        </div>
    );
}

TrackList.propTypes = {
    tracks: React.PropTypes.array.isRequired,
    playPreview: React.PropTypes.func.isRequired,
};

export default TrackList;
