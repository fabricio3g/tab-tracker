import axios from 'axios'
import store from '../store/index'
console.log(store.state.token)
const Api = axios.create({
  baseURL: 'http://localhost:5052/',
  headers: {
    Authorization: 'Bearer ' + store.state.token
  }
})

export default Api
