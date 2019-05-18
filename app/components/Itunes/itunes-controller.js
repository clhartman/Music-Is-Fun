import ItunesService from "./itunes-service.js";
//Private
const _itunesService = new ItunesService()

function _drawSongs() {
  let songs = _itunesService.Songs
  let template = ''
  for (let i = 0; i < songs.length; i++) {
    let song = songs[i];
    template += song.foundTemplate
  }
  document.getElementById('songs').innerHTML = template
  //changes button back to GET MUSIC once songs are loaded
  document.querySelector('#get-music-button').textContent = 'GET MUSIC'
  console.log(_itunesService.Songs)

}


//PUBLIC
class ItunesController {
  constructor() {
    //BE SURE TO REGISTER YOUR SUBSCRIBERS!!!!!!!
    _itunesService.addSubscriber('songs', _drawSongs)
  }


  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    document.querySelector('#get-music-button').textContent = 'LOADING....'
    _itunesService.getMusicByArtist(artist)
  }
}


export default ItunesController