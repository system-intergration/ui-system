import axios, { AxiosError, AxiosResponse } from "axios";
import queryString from "query-string";
import { toast } from "react-toastify";

const axiosClient = axios.create({
  baseURL: "http://localhost:4000/api",
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
  return config;
});

axiosClient.interceptors.response.use(
  (response: AxiosResponse<any, any>) => {
    if (response && response.data) {
      if (response.data.data?.token) {
        localStorage.setItem("token", response.data.data.token);
      }
      return response.data.data || response.data;
    }
    return response.data;
  },
  (error: AxiosError) => {
    if (error.response?.status === 404) {
      toast.error("Not found api");
    }
    if (error.response?.status === 401) {
      // window.location.href = '/';
      localStorage.clear();
    } else {
      toast.dismiss();
    }
    throw new Error(error.response?.data.message || error.message);
  }
);

export default axiosClient;
