import Api from './Api'

export default {
  index () {
    return Api.get('songs')
  },
  show (songId) {
    return Api.get(`songs/${songId}`)
  },
  put (song) {
    console.log()
    return Api.put(`songs/${song.songId}`, song)
  },
  post (song) {
    return Api.post('song-create', song)
  }
}
