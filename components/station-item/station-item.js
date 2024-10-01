Component({
  mixins: [],
  data: {},
  props: {
    station: Object,
  },
  didMount() {
    console.log("Station in station-item:", this.props.station); // Verifica que el objeto station se pase correctamente
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    navigationToDetail() {
      const stationId = this.props.station.id;
      console.log("stationId", stationId);
      if (stationId) {
        my.navigateTo({
          url: `/pages/station-detail/station-detail?stationId=${stationId}`,
        });
      } else {
        console.error("Station ID is undefined");
      }
    },
  },
});
