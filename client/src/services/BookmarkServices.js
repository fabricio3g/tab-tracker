import Api from './Api'

export default {
  index (bookmark) {
    return Api.get('bookmarks', {
      params: bookmark
    })
  },
  post (bookmark) {
    return Api.post('bookmarks', {
      params: bookmark
    })
  },
  delete (bookId) {
    return Api.delete('bookmarks', {
      bookId: bookId
    })
  }
}
