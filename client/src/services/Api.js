import axios from 'axios'

const Api =  axios.create(
        {
            baseURL: "http://localhost:5051/"
        }
    )

    
export default Api