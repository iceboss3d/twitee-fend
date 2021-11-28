import ServerCall from "../Components/ServerCall";

const authProvider = {
  isAuthenticated: false,
  async login(data, callback) {
    try {
      let result = await ServerCall.auth("auth/login", data);
      window.localStorage.setItem("user", result.data);
      this.isAuthenticated = true;
      callback(result);
    } catch (error) {
        this.isAuthenticated = false;
        callback();
    }
  },
};

export {authProvider};