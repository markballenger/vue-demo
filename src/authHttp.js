import axios from 'axios'

export default {
  get: function (path, token) {
    path = encodeURI(path)
    let http = axios.create({baseURL: 'https://api.spotify.com/v1/'})
    http.defaults.headers.common['Authorization'] = `Bearer ${token}`
    return http.get(path)
  }
}
