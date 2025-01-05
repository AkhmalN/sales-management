import Axios from "axios";

const axios = Axios.create({});

const serverUrl = import.meta.env.VITE_APP_BASE_URL;
export const baseUrl = `${serverUrl}`;

axios.interceptors.request.use(
  async function (config) {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
      config.headers["Access-Control-Allow-Credentials"] = true;
    }
    config.headers["Content-Type"] = "application/json";
    config.baseURL = baseUrl;

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    if (error?.response?.status === 403) {
      throw new Error("An error was encountered during authentication");
    }
    if (error?.response?.status === 401) {
      throw new Error("Unauthorized");
    }
    throw error;
  }
);

export default axios;
