import { createStore } from "vuex";
import axios from "@/axios";

export default createStore({
  state: {
    count: 0,
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
  mutations: {
    increment(state, payload) {
      state.count += payload;
    },
    decrement(state) {
      state.count--;
    },
  },
  actions: {
    asyncIncrement(context) {
      axios
        .get("add-count")
        .then((response) => {
          context.commit("increment", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {},
});
