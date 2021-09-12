import axios from "axios"

export default {

  async getStreamByUrl(url) {
    let res = await axios.get(`http://localhost:5000/api/getStream?url=${url}`);
    return res.data;
  },

  async getContentByTag(tag) {

    let res = await axios.get(`http://localhost:5000/api/search?t=${tag}`)
    return res.data 
  }
}