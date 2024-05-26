// src/stores/user-store.ts
import {createStore} from 'zustand/vanilla'

export type UserState = {
  username: string | null;
}

export type UserActions = {
  set_user: (username: string) => void
}

export type UserStore = UserState & UserActions

export const initUserStore = (): UserState => {
  const state = {username: null as null | string}

  if (typeof window !== "undefined") {
    if (localStorage.getItem('username')) {
      state.username = localStorage.getItem('username')
    }
  }

  return state
}

export const defaultInitState: UserState = {
  username: null
}

export const createUserStore = (
  initState: UserState = defaultInitState,
) => {
  return createStore<UserStore>()((set) => ({
    ...initState,
    set_user: (username) => set(() => ({username}))
  }))
}
