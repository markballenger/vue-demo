import Vuex from 'vuex'
import Vue from 'vue'
import spotifyStore from '@/store/spotifyStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    spotifyStore
  }
})
