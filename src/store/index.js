import Vue from 'vue'
import Vuex from 'vuex'
import jsonData from '../data.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: jsonData.data || []
  },
  getters:{
    getData(state){
      return state.data
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
