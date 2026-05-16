import axios from "axios";

const API = axios.create({
  baseURL: "https://candidateprofilematch.onrender.com/api",
});

export default API;