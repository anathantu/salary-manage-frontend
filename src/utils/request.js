import axios from "axios";
import store from "@/store";
import { Modal } from "antd";
import { getToken } from "@/utils/auth";
import { logout } from "@/store/actions";

//创建一个axios示例
const request = axios.create({
  baseURL: "http://localhost:8080", // api 的 base_url
  timeout: 5000, // request timeout
});

export default request;
