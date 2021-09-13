import axios from "axios"

const base_api = 'http://localhost:5000/api'
export default {

  async getStreamByUrl(url) {
    let res = await axios.get(`${base_api}/getStream?url=${url}`);
    return res.data;
  },

  async getContentByTag(tag) {

    let res = await axios.get(`${base_api}/search?t=${tag}`)
    return res.data 
  },

  async getContentByText(text) {

    let res = await axios.get(`${base_api}/search?q=${text}`)
    return res.data
  }
}