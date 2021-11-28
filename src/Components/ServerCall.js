import axios from "axios";
const baseUrl = process.env.REACT_APP_BASEURL;

const ServerCall = {
  async auth(endpoint, data) {
    let response;
    await axios
      .post(`${baseUrl}/${endpoint}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        response = res.data;
      })
      .catch((err) => {
        let message;
        message = err.response ? err.response.data.error : err.message;
        throw new Error(message);
      });
    return response;
  },

  async get(endpoint) {
    let response;
    await axios
      .get(`${baseUrl}/${endpoint}`, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("user")}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        response = res.data;
      })
      .catch((err) => {
        let message;
        message = err.response ? err.response.data.error : err.message;
        throw new Error(message);
      });
    return response;
  },

  async post(endpoint, data) {
    let response;
    await axios
      .post(`${baseUrl}/${endpoint}`, data, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("user")}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        response = res.data;
      })
      .catch((err) => {
        let message;
        message = err.response ? err.response.data.error : err.message;
        throw new Error(message);
      });
    return response;
  },
};
export default ServerCall;
