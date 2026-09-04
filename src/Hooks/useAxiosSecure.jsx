import axios from "axios";

import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthContext";

const instance = axios.create({
  baseURL: "https://my-habit-flow-server.vercel.app",
});

const useAxiosSecure = () => {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const interceptor = instance.interceptors.request.use((config) => {
      if (user?.accessToken) {
        config.headers.authorization = `Bearer ${user.accessToken}`;
      }
      return config;
    });
    // console.log(user.accessToken);
    return () => {
      instance.interceptors.request.eject(interceptor);
    };
  }, [user]);
  return instance;
};
export default useAxiosSecure;
