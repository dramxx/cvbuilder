import axios from "axios";

export const saveJwt = (token) => {
  localStorage.setItem("jwt", token);
};

export const getJwt = () => {
  return localStorage.getItem("jwt");
};

export const removeJwt = () => {
  localStorage.removeItem("jwt");
};

export const isLoggedIn = () => {
  return !!getJwt();
};

export const httpGetData = (url) => {
  const token = getJwt();
  const header = {
    "auth-token": token,
    "content-type": "application/json",
    Accept: "application/json",
  };

  return axios.get(url, { headers: header });
};

export const httpPostData = (url, data) => {
  const token = getJwt();
  const header = {
    "auth-token": token,
    "content-type": "application/json",
    Accept: "application/json",
  };

  return axios.post(url, data, { headers: header });
};

export const httpPutData = (url, data) => {
  const token = getJwt();
  const header = {
    "auth-token": token,
    "content-type": "application/json",
    Accept: "application/json",
  };

  return axios.put(url, data, { headers: header });
};

export const httpDeleteData = (url) => {
  const token = getJwt();
  const header = {
    "auth-token": token,
    "content-type": "application/json",
    Accept: "application/json",
  };

  return axios.delete(url, { headers: header });
};
