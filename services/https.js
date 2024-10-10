const request = (baseUrl, endpoint, method, data = {}) => {
  return new Promise((resolve, reject) => {
    const url = `${baseUrl}${endpoint}`;
    console.log("Request URL:", url);

    my.request({
      url: url,
      method: method,
      data: data,
      success: (result) => {
        console.log("Request success:", result);
        resolve(result);
      },
      fail: (error) => {
        console.error("Request failed:", error);
        reject(error);
      },
    });
  });
};

const get = (baseUrl, endpoint, data = {}) => {
  return request(baseUrl, endpoint, "GET", data);
};

const post = (baseUrl, endpoint, data) => {
  return request(baseUrl, endpoint, "POST", data);
};

const put = (baseUrl, endpoint, data) => {
  return request(baseUrl, endpoint, "PUT", data);
};

const del = (baseUrl, endpoint, data) => {
  return request(baseUrl, endpoint, "DELETE", data);
};

module.exports = {
  get,
  post,
  put,
  del,
};
