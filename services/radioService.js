const { get } = require("./https");
const { BASE_URL, RADIOS_URL } = require("./apiUrls");

const getRadioStations = async () => {
  return get(BASE_URL, `${RADIOS_URL}/`);
};

const getRadioStationById = async (id) => {
  return get(BASE_URL, `${RADIOS_URL}/${id}`);
};

module.exports = {
  getRadioStations,
  getRadioStationById,
};
