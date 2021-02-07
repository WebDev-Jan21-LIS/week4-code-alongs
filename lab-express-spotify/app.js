require('dotenv').config();

const express = require('express');
const hbs = require('hbs');

// require spotify-web-api-node package here:
const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
  });

spotifyApi
  .clientCredentialsGrant()
  .then(data => spotifyApi.setAccessToken(data.body['access_token']))
  .catch(error => console.log('Something went wrong when retrieving an access token', error));


const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

// setting the spotify-api goes here:

// Our routes go here:

//Route -> application entry point
app.get('/', (req, res) => {
    res.render('index');
});

//Route -> route when searching for artist
app.get('/artist-search', (req, res) => {
    let artistName = req.query.artist; // -> when param comes from a form GET
    spotifyApi
        .searchArtists(artistName)
        .then((data) => { //Promise resolved
            console.log(data);
            res.render('artist-search-results', { artistList: data.body.artists.items });
        });
});

//Route -> route when searching for albums
app.get('/albums/:artistId', async (req, res) => {
    let artistId = req.params.artistId; //When it comes on the url /albums/3432432
    let data = await spotifyApi.getArtistAlbums(artistId);
     //only after I get the results
            //I render the view
    res.render('albums', { albumsList: data.body.items });
 
});

//Route -> route when searching for tracks
app.get('/tracks/:trackId', (req, res) => {
    let trackId = req.params.trackId;
    spotifyApi.getAlbumTracks(trackId)
        .then((data) => {
            res.render('tracks', { tracksList: data.body.items});
        });
});

app.listen(3000, () => console.log('My Spotify project running on port 3000 🎧 🥁 🎸 🔊'));
