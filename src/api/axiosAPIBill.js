import axios from "axios";
import queryString from "query-string";
import { URL_SERVER_BILL } from "../utils/urlPath";

const axiosBILL = axios.create({
  baseURL: URL_SERVER_BILL,
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
  // withCredentials: true,
});

axiosBILL.interceptors.request.use(async (config) => {
  return config;
});

axiosBILL.interceptors.response.use(
  (response) => {
    if (response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    switch (error.response) {
      case 500:
        console.log("Server error");
        // return error.response;
        break;
      default:
        // console.log("Something went wrong");
        // console.log("--------------------");
        // console.log(`URL: ${error.response.config.url}`);
        // console.log(`HTTP Code: ${error.response.status}`);
        // console.log(`HTTP Message: ${error.response.statusText}`);
        // console.log("-------------------- ");
        return error.response;
    }

    return Promise.reject(error);
  }
);

export default axiosBILL;
