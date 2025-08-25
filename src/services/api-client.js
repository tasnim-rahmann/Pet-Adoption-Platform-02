import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://pet-adoption-platform-01.vercel.app/api/v1",
});

export default apiClient;