const radioService = require("../../services/radioService");

Page({
  data: {
    stations: [],
  },
  onLoad() {
    my.showLoading({
      content: "Cargando...",
      delay: 0,
      mask: true,
    });
    this.loadRadioStations();
  },
  loadRadioStations() {
    radioService
      .getRadioStations()
      .then((res) => {
        my.hideLoading()
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
