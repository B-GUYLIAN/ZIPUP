import Vue from "vue";
import Vuex from "vuex";
import http from "@/util/http-common.js";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

import boardStore from "@/store/modules/boardStore.js";
import memberStore from "@/store/modules/memberStore.js";

export default new Vuex.Store({
  state: {
    sidos: [{ value: null, text: "선택하세요" }],
    guguns: [{ value: null, text: "선택하세요" }],
  },
  mutations: {
    SET_SIDO_LIST(state, sidos) {
      sidos.forEach((sido) => {
        state.sidos.push({ value: sido.sidoCode, text: sido.sidoName });
      });
    },
    SET_GUGUN_LIST(state, guguns) {
      guguns.forEach((gugun) => {
        state.guguns.push({ value: gugun.gugunCode, text: gugun.gugunName });
      });
    },
    CLEAR_SIDO_LIST(state) {
      state.sidos = [{ value: null, text: "선택하세요" }];
    },
    CLEAR_GUGUN_LIST(state) {
      state.guguns = [{ value: null, text: "선택하세요" }];
    },
  },
  actions: {
    getSido({ commit }) {
      http.get("/map/sido").then((res) => {
        // console.log(res);
        commit("SET_SIDO_LIST", res.data);
      });
      const params = { gugun: "11110" };
      console.log(params);
      http
        .get("/map/dong", params)
        .then((res) => {
          console.log(res);
        })
<<<<<<< HEAD
<<<<<<< HEAD
        .catch((err) => {
          console.log(err);
        });
=======
      const params = { gugun: '11110' };
      console.log(params)
      http.get("/map/dong", params).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      })
>>>>>>> 5caafcd06b7792f8e76396af369b1051cc64a7c7
=======
        .catch((err) => {
          console.log(err);
        });
>>>>>>> dc652601ce0ed566bb38d80d30e03e2b9dd8db54
    },
    getGugun({ commit }, sidoCode) {
      const params = { sido: sidoCode };
      http
        .get("/map/gugun", { params })
        .then((res) => {
          commit("SET_GUGUN_LIST", res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {
    boardStore,
    memberStore,
  },
  plugins: [
    createPersistedState({
      // 브라우저 종료시 제거하기 위해 localStorage가 아닌 sessionStorage로 변경. (default: localStorage)
      storage: sessionStorage,
    }),
  ],
});
