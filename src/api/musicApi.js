import axios from 'axios';

function fetch(request, callback) {
    axios.get(request).then(response => {
        callback(response.data);
    }, reason => {
        console.log("An error occurred with the spotify API!!!");
        callback(false);
    });
}

export function getAlbums(artist, callback) {
    const request = `https://api.spotify.com/v1/search?q=${artist}&type=album`;
    fetch(request, callback);
}

export function getTracks(albumId, callback) {
    const request = `https://api.spotify.com/v1/albums/${albumId}`;
    fetch(request, callback);
}
