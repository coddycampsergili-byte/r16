import axios from 'axios'

const fetchAxios = axios.create({
    baseURL : "https://6979e39fcc9c576a8e181e8c.mockapi.io/",
    headers : {
        "Content-Type" : "application/json"
    }
})

export default fetchAxios