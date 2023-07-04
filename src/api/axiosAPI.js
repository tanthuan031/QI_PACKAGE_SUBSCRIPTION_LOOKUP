import axios from "axios";

const axiosAPI = axios.create({
  baseURL: "https://qi.com.vn",
  headers: {
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
  },

  // withCredentials: true,
  // crossDomain: true,
});

axiosAPI.interceptors.request.use(async (config) => {
  return config;
});

axiosAPI.interceptors.response.use(
  (response) => {
    if (response) {
      return response;
    }
    return response;
  },
  (error) => {
    switch (error.response) {
      case 500:
        console.log("Server error");
        return error.response;
        break;
      default:
        console.log("Something went wrong");
        console.log("--------------------");
        console.log(`URL: ${error.response.config.url}`);
        console.log(`HTTP Code: ${error.response.status}`);
        console.log(`HTTP Message: ${error.response.statusText}`);
        console.log("-------------------- ");
        return error.response;
    }

    return Promise.reject(error);
  }
);

export default axiosAPI;
