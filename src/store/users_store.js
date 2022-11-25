import { createStore } from 'vuex'
import config from '../config'
export const userStore = createStore({
    state() {
        return {
            users: [],
            loading: false,
            page: 1
        }
    },
    mutations: {
        setUsers(state, users) {
            state.users = users
        },
        setLoading(state, loading) {
            state.loading = loading
        },
        setPage(state, page) {
            state.page = page
        }
    },
    actions: {
        async getUsers({ commit }) {
            commit('setLoading', true)
            let response = await fetch(config.USER_API_URL)
            let users = await response.json()
            commit('setUsers', users)
            commit('setLoading', false)
        },
        getPage({ commit }, page) {
            commit('setPage', page)
        }
    }
})