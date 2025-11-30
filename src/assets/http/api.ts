import axios from "axios";
import keycloak from "@/keycloak";

const api = axios.create({
  baseURL: "http://localhost:8081",
});

api.interceptors.request.use(
  async (config: any) => {
    if (keycloak.token) {
      await keycloak.updateToken(70).catch(() => keycloak.login());

      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${keycloak.token}`,
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
