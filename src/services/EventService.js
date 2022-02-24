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

  async getContent(type, content, pageNum = 1) {

    let queryType = ''
    if (type == "tag") {
      queryType = 't'
    } 
    else if (type == "text") {
      queryType = 'q'
    }

    let res = await axios.get(`${base_api}/search?${queryType}=${content}`, { params: { p: pageNum} } )
    return res.data 
  },
  
}