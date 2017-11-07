import _ from 'lodash'
import authHttp from '@/authHttp'

/**
 * State
 */
const state = {
  searchResults: [],
  searchText: '',
  loading: false
}

/**
 * Actions
 */
const actions = {
  getSearchResults: _.debounce(function ({commit, state, rootState}) {
    // if not logged in, set list empty
    if (!rootState.spotifyAuth.accessToken) {
      window.location = 'http://localhost:8080/login'
      commit('get_search_results', [])
    }

    // update the spinny
    this.dispatch('updateLoading', true)

    // call the api
    authHttp
            .get(`search?type=artist,album&limit=50&q=${state.searchText || 'a'}`, rootState.spotifyAuth.accessToken)
            .then(response => {
              // flatten all the lists to one
              let searchResults = _.flatten([
                response.data.artists.items,
                response.data.albums.items])
              // sort it
              searchResults = _.sortBy(searchResults, 'name')
              searchResults = _.each(searchResults, function (x) { x.active = false })
              commit('get_search_results', searchResults)
              this.dispatch('updateLoading', false)
            })
  }, 300),
  updateLoading: _.debounce(function ({commit}, loading) {
    commit('update_loading', loading)
  }, 200)
}

/**
 * Mutations
 */
const mutations = {
  get_search_results (state, data) {
    state.searchResults = data
  },
  update_loading (state, loading) {
    state.loading = loading
  }
}

/**
 * Getters
 */
const getters = {
  searchResults: x => x.searchResults,
  loading: x => x.loading
}

export default {
  state,
  actions,
  mutations,
  getters
}
