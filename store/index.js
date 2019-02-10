import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      mainClasses: [],
      headerClasses: [],
      isMobileMenuOpen: false,
    }),

    getters: {
      mainClasses: state => state.mainClasses,
      headerClasses: state => state.headerClasses,
      isMobileMenuOpen: state => state.isMobileMenuOpen,
    },

    mutations: {
      setMainClasses: (state, mainClasses) => {
        state.mainClasses = mainClasses
      },
      setHeaderClasses: (state, headerClasses) => {
        state.headerClasses = headerClasses
      },
      setIsMobileMenuOpen: (state, isMobileMenuOpen) => {
        state.isMobileMenuOpen = isMobileMenuOpen
      },
    }
  })
}

export default createStore
