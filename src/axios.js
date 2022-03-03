import axios from "axios";

const service = axios.create({
  baseURL: "http://127.0.0.1:3000/",
  timeout: 5000,
  headers: { "Content-Type": "application/json;charset=UTF-8" },
});
service.defaults.headers.post["Access-Control-Allow-Origin-Type"] = "*";

service.interceptors.request.use(
  (config) => {
    const token = "test-token";
    const lang = "zh-tw";
    config.headers["X-Token"] = token;
    config.headers["X-Lang"] = lang;
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default service;