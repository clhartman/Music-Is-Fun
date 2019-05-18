export default class Song {
    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "250x250")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.collectionPrice
        this.preview = song.previewUrl
    }

    get foundTemplate() {
        return `
           <div class="col-sm-4">
            <div class="card">
                <img class="card-img-top" src=${this.albumArt} alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${this.title}</h5>
                    <p class="card-text"><b>Artist Name:</b> ${this.artist}</p>
                    <audio controls style="width: 200px;"src="${this.preview}"></audio>
                    <p class="card-text">Album Title: ${this.collection}</p>
                    <p class="card-text">Album Price: ${this.price}</p>
                </div>
            </div>
        </div>
    `
    }
}