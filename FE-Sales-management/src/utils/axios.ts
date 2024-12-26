import axios from "axios";

export const serverRequest = axios.create({
  baseURL: "http://localhost:8090/api/v1",
});
