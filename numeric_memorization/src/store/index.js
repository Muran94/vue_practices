import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playStatus: null,
    digits: 10,
    seconds: 1,
    generatedNumbers: null,
    answeredNumbers: null,
  },
  getters: {
  },
  mutations: {
    generateNumbers(state) {
      state.generatedNumbers = new Array(10).fill(null).map(() => {
        return Math.floor(Math.random() * 10);
      }).join("");
    },
    saveAnsweredNumbers(state, answeredNumbers) {
      state.answeredNumbers = answeredNumbers;
    },
    startCountDown(state) {
      state.playStatus = 'count_down';
    },
    startRemembering(state) {
      state.playStatus = 'remembering';
    },
    startAnswering(state) {
      state.playStatus = 'answering';
    },
    startShowingResults(state) {
      state.playStatus = 'showing_results'
    },
    finishPlaying(state) {
      state.playStatus = 'not_playing';
    }
  },
  actions: {
  },
  modules: {
  }
})
