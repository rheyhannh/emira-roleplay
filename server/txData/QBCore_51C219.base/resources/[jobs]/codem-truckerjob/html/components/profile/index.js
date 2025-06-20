import importTemplate from "../../utils/importTemplate.js";
import inlinesvg from "../../utils/inlineSvg.js";

export default {
  template: await importTemplate("components/profile/index.html"),
  data: () => ({}),
  mounted() {},
  computed: {
    ...Vuex.mapState({
      missions: (state) => state.missions,
      playerData: (state) => state.playerData,
      xp: (state) => state.xp,
      language: (state) => state.language,


    }),
    getHistory(){
      return this.playerData.history.reverse()
    }
  },
  components: {
    inlinesvg,
  },
  methods: {
    secondsToDate(seconds) {
      const date = new Date(null);
      date.setSeconds(seconds); // specify value for SECONDS here
      let day = date.getDate() + 1;
      let month = date.getMonth() + 1;

      if (day < 10) {
        day = "0" + day;
      }
      if (month < 10) {
        month = "0" + month;
      }

      return `${day}.${month}.${date.getFullYear()}`;
    },
  },
};
