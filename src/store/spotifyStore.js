// import _ from 'lodash'

/**
 * State
 */
const state = {
  searchResults: [],
  searchText: ''
}

/**
 * Actions
 */
const actions = {
  getSearchResults ({commit, state, rootState}) {
    let data = [{ name: 'Jimi Hendrix' },
            { name: 'Pink Floyd' }]
    commit('get_search_results', data)
  }
}

/**
 * Mutations
 */
const mutations = {
  get_search_results (state, data) {
    state.searchResults = data
  }
}

/**
 * Getters
 */
const getters = {
  searchResults: x => x.searchResults
}

export default {
  state,
  actions,
  mutations,
  getters
}
