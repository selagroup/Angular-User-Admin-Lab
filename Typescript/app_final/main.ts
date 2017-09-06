/* Make this code compile */
import { Album } from './model/album.model';

const ALBUM_MODEL = {
    "name": "Abbey Road",
    "playcount": 40393427,
    "mbid": "e12f53a3-e912-321d-bdc7-ed17ec525ec0",
    "url": "https://www.last.fm/music/The+Beatles/Abbey+Road",
    "artist": {
        "name": "The Beatles",
        "mbid": "b10bbbfc-cf9e-42e0-be17-e2c3e1d2600d",
        "url": "https://www.last.fm/music/The+Beatles"
    },
    "image": [
        {
            "#text": "https://lastfm-img2.akamaized.net/i/u/34s/2ce29f74a6f54b8791e5fdacc2ba36f5.png",
            "size": "small"
        },
        {
            "#text": "https://lastfm-img2.akamaized.net/i/u/64s/2ce29f74a6f54b8791e5fdacc2ba36f5.png",
            "size": "medium"
        },
        {
            "#text": "https://lastfm-img2.akamaized.net/i/u/174s/2ce29f74a6f54b8791e5fdacc2ba36f5.png",
            "size": "large"
        },
        {
            "#text": "https://lastfm-img2.akamaized.net/i/u/300x300/2ce29f74a6f54b8791e5fdacc2ba36f5.png",
            "size": "extralarge"
        }
    ]
};

function createAlbumArray(album){
   return [album];
}


function logAlbumArray(albums:Album[]){
    console.log(albums);
}

logAlbumArray(createAlbumArray(ALBUM_MODEL));

