import axios from "axios";

const publicAxios = axios.create({
    baseURL: 'https://reactblogdata.onrender.com'
  })

  export default publicAxios;