import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  // timeout: 1000,
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
