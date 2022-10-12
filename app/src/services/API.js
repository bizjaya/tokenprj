import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API,
  responseType: "json",
});

const URL = {
  USER: {
    REFS: "/user/refs",
    GET: "/user/get",
    REG: "/user/register",
    COMM: "/user/comms",
    HISTRWDS: "/user/histrewards",
    HISTSTKS: "/user/histstaking",
  },
  ACCT: {
    STAKE: "/acct/stake",
    UNSTAKE: "/acct/unstake",
    CLAIM: "/acct/claim",
    CLREF: "/acct/clref",
    CLPOOL: "/acct/clpool",
  },
};

API.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      //    Authorization: getAuthToken()
    };
    // console.dir(config.headers);

    // you can also do other modification in config
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const getAuthToken = () => {
  const token = window.localStorage.getItem("jwt_access_token");
  return `Bearer ${token}`;
};

const setCookie = (name, value, days) => {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
};
const getCookie = (name) => {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};
const delCookie = (name) => {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
};

export { API, URL, setCookie, getCookie, delCookie };
