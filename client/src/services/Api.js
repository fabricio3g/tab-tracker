import axios from 'axios'

const Api = axios.create({ baseURL: 'http://localhost:5052/' })

export default Api
