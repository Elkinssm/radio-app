const radioService = require("../../services/radioService");
const imagesService = require("../../services/imagesService");

Page({
  data: {
    station: {},
    showWebView: false,
    showStreamers: false,
    query: "radio",
    client_id: "",
    images: [],
    backgroundImage: "",
  },
  onLoad(query) {
    my.showLoading({
      content: "Cargando...",
      delay: 0,
      mask: true,
    });

    const stationId = query.stationId;
    if (stationId) {
      this.loadStationDetails(stationId);
    } else {
      console.error("Station ID is undefined in query");
    }

    this.setData({
      query: "radio",
    });

    this.loadImages();
  },
  loadStationDetails(stationId) {
    radioService
      .getRadioStationById(stationId)
      .then((response) => {
        const data = response.data;
        console.log("Station data received:", data);
        this.setData(
          {
            station: data,
          },
          () => {
            console.log("Station data set in state:", this.data.station);
            my.hideLoading();
          }
        );
      })
      .catch((err) => {
        console.error(err);
        my.hideLoading();
      });
  },
  loadImages() {
    imagesService
      .getImages(this.data.query)
      .then((response) => {
        const data = response.data;
        console.log("Images data received:", data);
        const images = data.results;
        const randomImage =
          images[Math.floor(Math.random() * images.length)].urls.full;
        this.setData(
          {
            images: images,
            backgroundImage: randomImage,
          },
          () => {
            console.log("Images data set in state:", this.data.images);
            console.log("Background image set:", this.data.backgroundImage);
          }
        );
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
