export interface Song {
    id : string
    title : string
    album : string
    albumCover : string
    liked : boolean
}

const Covers = [
    "https://pictures.abebooks.com/isbn/9781850280866-fr.jpg",
    "https://m.media-amazon.com/images/I/515405TCJSL._AC_UF1000,1000_QL80_.jpg"
]

export const SongPlaceholder : Song = {
    id : "000",
    album : "Placeholder Album",
    title:"Song Placeholder",
    albumCover : Covers[0],
    liked: false
}


type SongMap = {
    [key : string] : Song;
}

export const mockSongs : SongMap = {
    "000" : {id : "000", album : "Album", title : "Default title", albumCover : Covers[0], liked : false} as Song,
    "001" : {id : "001", album : "Album", title : "Title 001", albumCover : Covers[1], liked : true} as Song,
}