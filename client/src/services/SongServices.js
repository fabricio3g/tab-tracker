import Api from './Api'

export default {
  index (search) {
    return Api.get('songs',
      {
        params: {
          search: search
        }
      }
    )
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
  },
  delete (songData) {
    return Api.post('song-create', songData)
  }
}
