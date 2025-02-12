import axios from "axios";
import settings from "@api/settings";

const axiosInstance = axios.create({
  baseURL: `${settings.URL}:${settings.PRT}/${settings.API}`,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    const status = error.response ? error.response.status : null;
    error.status = status;
    if (status === 401) {
      error.message = "You need to logged in to perform this operation";
    } else if (status === 403) {
      error.message = "You don't have authorization to perform this action";
    } else if (status === 404) {
      error.message = "No data was returned with the specified parameters";
    } else {
      error.message = "Connection between serves general fail";
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
