import Vue from 'vue'
import Vuex from 'vuex'

import { state, mutations } from './default'
import companies from './modules/companies'
import cart from './modules/cart/cart'
import auth from './modules/auth/auth'
import orders from './modules/orders/orders'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        companies,
        cart,
        auth,
        orders,
    },
    state,
    mutations
})

export default store