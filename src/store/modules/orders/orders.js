import axios from 'axios'
import { TOKEN_NAME, API_VERSION } from '@/configs/api'

const state = {
    myOrders: {
        data: []
    }
}

const mutations = {
    SET_ORDERS (state, orders) {
        state.myOrders = orders
    },

    SET_ORDER (state, order) {
        state.myOrders.data = order
    },
}

const actions = {

    getMyOrders ({commit}) {
        const token = localStorage.getItem(TOKEN_NAME)
        if (!token) Promise.reject()

        commit('SET_PRELOADER', true)
        commit('SET_TEXT_PRELOADER', 'Carregando os meus pedidos')

        return axios.get(`auth/${API_VERSION}/my-orders`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => commit('SET_ORDERS', response.data))
        .finally(() => commit('SET_PRELOADER', false))
    },

    getOrderByIdentify ({commit}, identify) {
        commit('SET_PRELOADER', true)
        commit('SET_TEXT_PRELOADER', 'Carregando os detalhes do pedido')

        return axios.get(`${API_VERSION}/orders/${identify}`)
                        .finally(() => commit('SET_PRELOADER', false))
    },

    evaluationOrder ({commit}, params) {
        const token = localStorage.getItem(TOKEN_NAME)
        if (!token) Promise.reject()

        return axios.post(`auth/${API_VERSION}/orders/${params.identify}/evaluations`, params, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
    },

    createOrder ({commit}, params) {
        return new Promise((resolve, reject) => {
            axios.post(`${API_VERSION}/orders`, params)
                        .then(response => {
                            commit('CLEAR_CART')

                            resolve(response.data.data)
                        })
                        .catch(response => reject(response.error))
        })
    },

    createOrderAutheticated ({commit}, params) {
        return new Promise((resolve, reject) => {
            const token = localStorage.getItem(TOKEN_NAME)
            if (!token) reject()

            axios.post(`auth/${API_VERSION}/orders`, params, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                commit('CLEAR_CART')

                resolve(response.data.data)
            })
            .catch(response => reject(response.error))
        })
    },

}

export default {
    state,
    mutations,
    actions
}