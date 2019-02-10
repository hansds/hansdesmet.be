import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      mainClasses: [],
    }),

    getters: {
      mainClasses: state => state.mainClasses,
    },

    mutations: {
      setMainClasses: (state, mainClasses) => {
        state.mainClasses = mainClasses
      },
    }
  })
}

export default createStore
