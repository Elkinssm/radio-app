const radioService = require("../../services/radioService");

Page({
  data: {
    stations: [],
  },
  onLoad() {
    this.loadRadioStations();
  },
  loadRadioStations() {
    radioService
      .getRadioStations()
      .then((res) => {
        console.log("Response from getRadioStations:", res.data);
        this.setData({
          stations: res.data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  },
});
