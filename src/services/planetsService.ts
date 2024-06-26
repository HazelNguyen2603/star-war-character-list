import axiosInstance from "config/axios";

const API_PREFIX = "/planets";

const getPlanetDetailService = (id: number) =>
  axiosInstance.get(`${API_PREFIX}/${id}`);

export { getPlanetDetailService };
