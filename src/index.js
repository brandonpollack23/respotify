import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import AlbumList from './components/AlbumList';
import TrackList from './components/TrackList';
import * as musicApi from './api/musicApi'

class App extends React.Component {
    constructor() {
        super();
        this.state = ({
            albums: [],
            tracks: [],
            hasSearched: false,
            searching: false,
            currentPreview: null,
        });
        this.getAlbums = this.getAlbums.bind(this);
        this.processAlbums = this.processAlbums.bind(this);
        this.hasSearched= this.hasSearched.bind(this);
        this.getTracks = this.getTracks.bind(this);
        this.processTracks = this.processTracks.bind(this);
        this.playPreview = this.playPreview.bind(this);
    }

    getAlbums(artist) {
        musicApi.getAlbums(artist, this.processAlbums);
    }

    processAlbums(payload) {
        if(payload === false) {
            this.setState ({
                searching: false,
            });
        };
        this.setState({
            albums: payload.albums.items,
            searching: false,
            tracks: [],
        });
    }

    getTracks(albumId) {
        musicApi.getTracks(albumId, this.processTracks);
    }

    processTracks(payload) {
        this.setState({
            tracks: payload.tracks.items,
        });
    }

    playPreview(previewUrl) {
        if(this.state.currentPreview) {
            const currentAudio = this.state.currentPreview;
            currentAudio.pause();
        }

        const newAudio = new Audio(previewUrl);
        this.setState({
            currentPreview: newAudio,
        });

        newAudio.play();
    }

    hasSearched() {
        this.setState({
            hasSearched: true,
            searching: true,
        });
    }

    render() {
        return (
            <div id="searchbar_section">
                <SearchBar
                    id="searchbar"
                    getAlbums={this.getAlbums}
                    hasSearched={this.hasSearched}
                />
                <AlbumList
                    albums={this.state.albums}
                    getTracks={this.getTracks}
                    hasSearched={this.state.hasSearched}
                    searching={this.state.searching}
                />
                <TrackList
                    tracks={this.state.tracks}
                    playPreview={this.playPreview}
                />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('container')
);
