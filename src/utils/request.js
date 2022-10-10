import axios from "axios";

//创建一个axios示例
const request = axios.create({
  baseURL: "http://localhost:8080", // api 的 base_url
  timeout: 5000, // request timeout
});

export default request;
