/**
 * State
 */
const state = {
  accessToken: '',
  refreshToken: ''
}

/**
 * Actions
 */
const actions = {
  setTokens ({commit, state, rootState}, {accessToken, refreshToken}) {
    commit('set_access_token', accessToken)
    commit('set_refresh_token', refreshToken)
  }
}

/**
 * Mutations
 */
const mutations = {
  set_access_token (state, accessToken) {
    state.accessToken = accessToken
  },
  set_refresh_token (state, refreshToken) {
    state.refreshToken = refreshToken
  }
}

/**
 * Getters
 */
const getters = {
  accessToken (state, getters, rootState) {
    return state.accessToken
  },
  refreshToken (state, getters, rootState) {
    return state.refreshToken
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
