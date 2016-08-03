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
            searching: false,
        });
        this.getAlbums = this.getAlbums.bind(this);
        this.processAlbums = this.processAlbums.bind(this);
        this.hasSearched= this.hasSearched.bind(this);
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
        });
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
                    hasSearched={this.state.hasSearched}
                    searching={this.state.searching} 
                />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('container')
);
