import axios from "axios";

const fetchApi = axios.create({
  baseURL: 'http://localhost:4000',
})

export default fetchApi;