import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import AlbumList from './components/AlbumList';
import * as musicApi from './api/musicApi'

class App extends React.Component {
    constructor() {
        super();
        this.state = ({
            albums: [],
            hasSearched: false,
        });
        this.getAlbums = this.getAlbums.bind(this);
        this.processAlbums = this.processAlbums.bind(this);
        this.hasSearched= this.hasSearched.bind(this);
    }

    getAlbums(artist) {
        musicApi.getAlbums(artist, this.processAlbums);
    }

    processAlbums(payload) {
        this.setState({
            albums: payload.albums.items,
        });
    }

    hasSearched() {
        this.setState({
            hasSearched: true
        });
    }

    render() {
        return (
            <div>
                <p>Hi</p>
                <SearchBar getAlbums={this.getAlbums} hasSearched={this.hasSearched} />
                <AlbumList albums={this.state.albums} hasSearched={this.state.hasSearched} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('container')
);
