import axios from "axios";

export const Api = axios.create({
  baseURL: "https://api.thecatapi.com/v1/images/search?limit=8"
})