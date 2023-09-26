import { store } from '../index'
import { defineStore } from 'pinia'

interface UserState {
  id: number
  avatar: string
  userName: string
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    id: 0,
    avatar: '',
    userName: ''
  }),
  getters: {
    getUserName(state): string {
      return state.userName
    }
  },
  actions: {
    setUser(User: UserState) {
      this.id = User.id
      this.avatar = User.avatar
      this.userName = User.userName
    }
  }
})

export const useUserStoreWithOut = () => {
  return useUserStore(store)
}
