const https = require("./https");

const getRadioStations = async () => {
  return https.get("/Radio");
};

const getRadioStationById = async (id) => {
  return https.get(`/Radio/${id}`);
};

module.exports = {
  getRadioStations,
  getRadioStationById,
};
