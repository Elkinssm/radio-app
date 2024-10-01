import { BASE_URL } from "./apiUrls";

const request = (endpoint, method, data = {}) => {
  return new Promise((resolve, reject) => {
    console.log("url", `${BASE_URL}${endpoint}`),
      my.request({
        url: `${BASE_URL}${endpoint}`,
        method: method,
        data: data,
        success: (result) => {
          resolve(result);
        },
        fail: (error) => {
          reject(error);
        },
      });
  });
};

const get = (endpoint, data = {}) => {
  return request(endpoint, "GET", data);
};

const post = (endpoint, data) => {
  return request(endpoint, "POST", data);
};

const put = (endpoint, data) => {
  return request(endpoint, "PUT", data);
};

const del = (endpoint, data) => {
  return request(endpoint, "DELETE", data);
};

module.exports = {
  get,
  post,
  put,
  del,
};
