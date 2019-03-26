import axios from 'axios'

const KEY = "AIzaSyCroYc0jV4WrAptc6pe1x3D0NxAkY6FvkQ"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
})

