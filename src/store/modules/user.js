import Vue from 'vue'
import apolloClient from '@/apollo'
Vue.use(apolloClient)
import userRepository from '@/repositries/user.repository'

export default {
  state: () => ({
    users: [],
  }),
  getters: {
    getUsers: (state) => state.users,
  },
  mutations: {
    set_users(state, data) {
      state.users = data
    },
    add_user(state, data) {
      state.users.push(data)
    },
    update_user(state, data) {
      const users = state.users
      const index = users.findIndex((user) => user.id === data.id)
      users[index] = data
      state.users = users
    },
    delete_user(state, data) {
        const users = state.users.filter((user) => user.id !== data.id)
        state.users = users
      },
  },
  actions: {
    async getUsers({ commit }) {
      const users = await userRepository.getUsers()
      commit('set_users', users.data.users)
    },
    async addUser({ commit }, payload) {
      const result = await userRepository.addUser(payload)
      commit('add_user', result.data.insert_users_one)
    },
    async updateUserById({ commit }, payload) {
      const result = await userRepository.updateUser(payload)
      commit('update_user', result.data.update_users_by_pk)
    },
    async deleteUserById({ commit }, payload) {
        const result = await userRepository.deleteUser(payload)
        commit('delete_user', result.data.delete_users_by_pk)
        
      },
  },
}
