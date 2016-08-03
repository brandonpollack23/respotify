import React from 'react';
import './searchbar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleInputChange(event) {
        //we must use the setState function because it uses React's state managment system
        //which is the whole point in letting React manage our DOM for us
        this.setState({
            searchTerm: event.target.value,
        });
    }

    handleKeyPress(event) {
        if(event.key === 'Enter') {
            if(this.state.searchTerm.length > 0) {
                this.props.getAlbums(this.state.searchTerm);
            }
            this.props.hasSearched(); 
        }
    }

    render() {
        return (
            <div id="searchbar_section">
                <h3>Search for An Artist</h3>
                <input id="searchbar" onChange={this.handleInputChange} onKeyPress={this.handleKeyPress} />
            </div>
        );
    }
}

SearchBar.propTypes = {
    getAlbums: React.PropTypes.func.isRequired,
    hasSearched: React.PropTypes.func.isRequired,
};

export default SearchBar
