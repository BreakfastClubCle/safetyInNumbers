import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    reports: []
  },
  mutations: {
    setReports (state, data) {
      state.reports = data
    },

    addReport (state, report) {
      state.reports = state.reports.concat(report)
    }
  },
  actions: {
    fetchReports ({ commit }) {
      axios.get('https://safetyinapi.herokuapp.com/reports')
        .then(({ data }) => commit('setReports', data.reports))
      // The axios call that will use the /reports GET
      // commit('setReports', data) <-- use this to update state when axios calls .then
    },

    saveReport ({ commit }, payload) {
      axios.post('https://safetyinapi.herokuapp.com/report', payload)
        .then(({ data }) => commit('addReport', data.report))
        .catch(console.error)
      // The axios call that will use the /report POST
      // commit('addReport', payload) <-- use this to add our report to state when axios calls .then
    },

    removeReport ({ commit }, id) {
      axios.delete('https://safetyinapi.herokuapp.com/reports', id)
        .then(({ data }) => commit('setReports', data.reports))
      // The axios call that will use the /report/id DELETE
      // commit('setReports', data) <-- I will return the reports so you can just overwrite state in the axios .then
    }
  }
})
