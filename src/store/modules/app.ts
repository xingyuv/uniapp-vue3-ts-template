import { store } from '../index'
import { defineStore } from 'pinia'

interface AppState {
  title: string
  locale: string
  theme: string
}

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    title: '',
    locale: '',
    theme: ''
  }),
  getters: {
    getTitle(state): string {
      return state.title
    }
  },
  actions: {
    setApp(User: AppState) {
      this.title = User.title
      this.locale = User.locale
      this.theme = User.theme
    }
  }
})

export const useAppStoreWithOut = () => {
  return useAppStore(store)
}
