import axios from "axios";

const axiosConfig = {
  baseURL: "http://123.207.32.32:9002/",
  timeout: 10000,
  withCredentials: true, //设置axios跨域
  crossDomain: true,
};
// export default function fetch(url, params) {
// return new Promise((resolve, reject) => {
const httpReq = axios.create(axiosConfig);
// 响应拦截
httpReq.interceptors.request.use(
  (config) => {
    console.log("..............请求发送拦截中.............");
    if (config.data) {
    }
    return config;
  },
  (err) => {
    console.log("..............请求发送失败拦截中.............");
    return err;
  }
);
httpReq.interceptors.response.use(
  (resp) => {
    return resp.data;
  },
  (err) => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = "请求错误";
          break;
        case 401:
          err.message = "未授权的访问";
          break;
        case 500:
          err.message = "服务端错误";
          break;
        default:
          err.message = "其他错误";
      }
      return err;
    }
  }
);

// httpReq()
//   .then((res) => {
//     resolve(res);
//   })
//   .catch((err) => {
//     reject(err);
//   });
// });
// }

export default httpReq;
