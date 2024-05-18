import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.1.208:3000",
});

instance.interceptors.response.use(
  (response) => {
    const data = response.data;
    return data;
  },
  (error) => Promise.reject(error)
);

export default instance;
