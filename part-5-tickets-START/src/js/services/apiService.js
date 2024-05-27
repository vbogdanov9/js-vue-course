import axios from "axios";
import config from "../config/apiConfig";

class Api {
  constructor() {
    this.url = config.url;
  }
  async countries() {
    try {
      const response = await axios.get(`${this.url}/countries`);
      // console.log("response = ", response)
      return response.data;
    } catch (err) {
      console.log("err = ", err);
      return Promise.reject(err);
    }
  }
  async cities() {
    try {
      const response = await axios.get(`${this.url}/cities`);
      // console.log("response = ", response)
      return response.data;
    } catch (err) {
      console.log("err = ", err);
      return Promise.reject(err);
    }
  }

  async airlines() {
    try {
      const response = await axios.get(`${this.url}/airlines`);
      // console.log("response = ", response)
      return response.data;
    } catch (err) {
      console.log("err = ", err);
      return Promise.reject(err);
    }
  }

  async prices(params) {
    try {
      const response = await axios.get(`${this.url}/prices/cheap`, {
        params,
      });
      return response.data;
    } catch (err) {
      console.log("err = ", err);
      return Promise.reject(err);
    }
  }
}

const api = new Api(config);

export default api;
