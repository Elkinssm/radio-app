const radioService = require("../../services/radioService");

Page({
  data: {
    station: {},
    showWebView: false,
    showStreamers: false,
  },
  onLoad(query) {
    const stationId = query.stationId;
    if (stationId) {
      this.loadStationDetails(stationId);
    } else {
      console.error("Station ID is undefined in query");
    }
  },
  loadStationDetails(stationId) {
    radioService
      .getRadioStationById(stationId)
      .then((response) => {
        const data = response.data;
        console.log("Station data received:", data);
        this.setData({
          station: data,
        }, () => {
          console.log("Station data set in state:", this.data.station);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  },
  toggleWebView() {
    this.setData({
      showWebView: !this.data.showWebView,
    });
  },
  toggleStreamers() {
    this.setData({
      showStreamers: !this.data.showStreamers,
    });
  },
});