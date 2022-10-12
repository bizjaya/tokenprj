import axios from "axios";
import { API } from "./API";

/* eslint-disable camelcase */

class APIService {
  init() {
    this.setInterceptors();
    this.handleAuthentication();
  }

  showMessage = (data) => {
    console.log("test");

    // showMessage({
    //   message: `${err.response.data.Message}: ${(
    //     err.response.data.Errors || []
    //   ).join(", ")}`,
    //   variant: "error",
    //   autoHideDuration: 2000,
    //   anchorOrigin: { vertical: "top", horizontal: "center" },
    // });
  };

  setInterceptors = () => {
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (err) => {
        return new Promise((resolve, reject) => {
          if (
            err.response.status === 401 &&
            err.config &&
            !err.config.__isRetryRequest
          ) {
            // if you ever get an unauthorized response, logout the pckg
            this.emit("onAutoLogout", "Invalid access_token");
            // this.setSession(null);
          }
          throw err;
        });
      }
    );
  };
  get = (url, data, dispatch = null) => {
    return new Promise((resolve, reject) => {
      const { ["Id"]: Id, ...d } = data;
      API.get(`${url}/${data.Id}`, { params: d })
        .then((res) => (res.data ? resolve(res.data) : reject(res.error)))
        .catch((err) => {
          this.showMessage(err);
          return reject(err);
        });
    });
  };

  fetch = (url, data, dispatch = null) => {
    return new Promise((resolve, reject) => {
      API.get(`${url}`, { params: { ...data } })
        .then((res) => (res.data ? resolve(res.data) : reject(res.error)))
        .catch((err) => {
          this.showMessage("");

          return reject(err);
        });
    });
  };

  getList = (url, data, dispatch = null) => {
    return new Promise((resolve, reject) => {
      API.get(url, { params: { ...data } })
        .then((res) => (res.data ? resolve(res.data) : reject(res.error)))
        .catch((err) => {
          this.showMessage("");

          return reject(err);
        });
    });
  };

  getListId = (url, data, dispatch = null) => {
    return new Promise((resolve, reject) => {
      API.get(`${url}/${data.Id}`, { params: { ...data } })
        .then((res) => (res.data ? resolve(res.data) : reject(res.error)))
        .catch((err) => {
          this.showMessage("");

          return reject(err);
        });
    });
  };

  create = (url, data, dispatch = null) => {
    console.log(data);
    return new Promise((resolve, reject) => {
      API.post(url, data)
        .then((res) => (res ? resolve(res) : reject(res.error)))
        .catch((err) => {
          console.log(err);
          this.showMessage("");

          return reject(err);
        });
    });
  };

  update = (url, data, dispatch = null) => {
    return new Promise((resolve, reject) => {
      API.put(`${url}/${data.Id}`, data)
        .then((res) => (res.data ? resolve(res.data) : reject(res.error)))
        .catch((err) => {
          this.showMessage("");

          return reject(err);
        });
    });
  };

  modify = (url, data, dispatch = null) => {
    return new Promise((resolve, reject) => {
      API.patch(`${url}/${data.Id}`, data)
        .then((res) => (res.data ? resolve(res.data) : reject(res.error)))
        .catch((err) => {
          this.showMessage("");

          return reject(err);
        });
    });
  };

  change = (url, data, dispatch = null) => {
    return new Promise((resolve, reject) => {
      API.put(`${url}`, data)
        .then((res) =>
          res.status === 200 || res.data ? resolve(res.data) : reject(res.error)
        )
        .catch((err) => {
          this.showMessage("");

          return reject(err);
        });
    });
  };

  delete = (url, data, dispatch = null) => {
    return new Promise((resolve, reject) => {
      API.delete(`${url}/${data.Id}`, {})
        .then((res) => (res ? resolve(res) : reject(res.error)))
        .catch((err) => {
          this.showMessage("");

          return reject(err);
        });
    });
  };
}

const instance = new APIService();

export default instance;
