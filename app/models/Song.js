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
        return `<div class="row">
            <div class="col-12">
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src=${this.albumArt} alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${this.title}</h5>
                            <p class="card-text">Artist Name: ${this.artist}</p>
                             <audio controls src="${this.preview}"></audio>
                        </div>
                </div>
                </div>
            </div>
        `
        // return `Song Name: ${this.title}` + `Album: ${this.albumArt}`
    }
}
// return `
//     <li>${this.description}<button onclick="app.controllers.orderController.serveFood(${this.id})">Serve Food</button></li>
    //     