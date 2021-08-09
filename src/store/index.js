import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lesson: null,
    user: null
  },
  getters:{
  },
  mutations: {
    setDataLesson(state, payload){
      state.lesson = payload
    },
    setDataUser(state, payload){
      state.user = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
