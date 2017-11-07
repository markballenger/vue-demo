import Vuex from 'vuex'
import Vue from 'vue'
import spotifyStore from '@/store/spotifyStore'
import spotifyAuth from '@/store/spotifyAuth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    spotifyAuth,
    spotifyStore
  }
})
