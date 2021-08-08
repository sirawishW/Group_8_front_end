import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lesson: null,
  },
  getters:{
  },
  mutations: {
    setDataLesson(state, payload){
      state.lesson = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
