import axios from "axios";

const apliClient = axios.create({
  baseURL: "http://localhost:8080/twitch/v1",
});

export const login = async (data) => {
  try {
    return await apliClient.post("/auth/login", data);
  } catch (e) {
    return {
      error: true,
      e,
    };
  }
};

export const register = async (data) => {
    try {
      return await apliClient.post("/auth/register", data);
    } catch (e) {
      return {
        error: true,
        e,
      };
    }
  };
