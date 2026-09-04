import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://my-habit-flow-server.vercel.app",
});

const useAxios = () => {
  return axiosInstance;
};
export default useAxios;
