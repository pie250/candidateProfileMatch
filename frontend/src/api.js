import axios from "axios";

const API = axios.create({
  baseURL: "https://candidateprofilematch-1.onrender.com/api",
});

export default API;