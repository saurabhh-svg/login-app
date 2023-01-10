import React from "react";
import axios from "axios";
import authHeader from "./authHeader";

const API_URL = "http://localhost:3000/api/test/";

class userService {
  getPulicContent() {
    return axios.get(API_URL + "all");
  }
  getUserBoard() {
    return axios.get(API_URL + "user", { headers: authHeader() });
  }
  getModeratorBoard() {
    return axios.get(API_URL + "mod", { headers: authHeader() });
  }
  getAdminBoard() {
    return axios.get(API_URL + "admin", { headers: authHeader() });
  }
}

export default new userService();
