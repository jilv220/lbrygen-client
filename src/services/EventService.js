import axios from "axios"

const base_api = 'http://localhost:5000/api'
export default {

  async getStreamByUrl(url) {
    let res = await axios.get(`${base_api}/getStream?url=${url}`);
    return res.data;
  },

  async downloadFromStream(url) {
    let res = await axios.get(`${base_api}/getStream?url=${url}`, { params: { d: "y" } });
    return res.data;
  },

  async getContentByTag(tag, pageNum = 1) {

    let res = await axios.get(`${base_api}/search?t=${tag}`, { params: { p: pageNum} } )
    return res.data 
  },

  async getContentByText(text, pageNum = 1) {

    let res = await axios.get(`${base_api}/search?q=${text}`, { params: { p: pageNum} })
    return res.data
  }
}