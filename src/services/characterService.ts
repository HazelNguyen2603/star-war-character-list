import axiosInstance from "config/axios";

const API_PREFIX = "/people";

const getAllCharacterService = (page = 1) =>
  axiosInstance.get(`${API_PREFIX}/?page=${page}`);

const getCharacterDetailService = (id: number) =>
  axiosInstance.get(`${API_PREFIX}/${id}`);

export { getAllCharacterService, getCharacterDetailService };
