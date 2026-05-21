import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    mainClasses: [] as string[]
  }),

  getters: {
    classes: (state) => state.mainClasses
  },

  actions: {
    setMainClasses(classes: string[]) {
      this.mainClasses = classes
    }
  }
})
