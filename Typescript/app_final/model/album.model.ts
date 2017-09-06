
export class ImageObject {
    "#text": string;
    size: string;
}

export class Album {
    mbid: string;
    name: string;
    url: string;
    artist: Artist;
    image: ImageObject[];
    playcount:number;
}

export class Artist {
    mbid: string;
    name: string;
    url: string;
}
