const { BASE_URL_IMAGES, IMAGES_URL } = require("./apiUrls");
const { get } = require("./https");
const config = require("../config");

const getImages = async (query) => {
  const endpoint = `${IMAGES_URL}?page=2&query=${query}&client_id=${config.UNSPLASH_CLIENT_ID}`;
  return get(BASE_URL_IMAGES, endpoint);
};

module.exports = {
  getImages,
};
