import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    reports: [],
    currCoords: {
      lat: 0,
      lng: 0
    }
  },
  mutations: {
    setReports (state, data) {
      state.reports = data
    },

    updateCoords (state, coords) {
      state.currCoords = coords
    },

    addReport (state, report) {
      state.reports = state.reports.concat(report)
    }
  },
  actions: {
    fetchReports ({ commit }) {
      axios.get('/reports')
        .then(({ data }) => commit('setReports', data.reports))
        .catch(console.error)
      // The axios call that will use the /reports GET
      // commit('setReports', data) <-- use this to update state when axios calls .then
    },

    saveReport ({ state, commit }) {
      axios.post('/report', state.currCoords)
        .then(({ data }) => commit('addReport', data.report))
        .catch(console.error)
      // The axios call that will use the /report POST
      // commit('addReport', payload) <-- use this to add our report to state when axios calls .then
    },

    removeReport ({ commit }, id) {
      axios.delete('/reports', id)
        .then(({ data }) => commit('setReports', data.reports))
      // The axios call that will use the /report/id DELETE
      // commit('setReports', data) <-- I will return the reports so you can just overwrite state in the axios .then
    }
  }
})
