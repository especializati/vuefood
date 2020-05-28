import Vue from 'vue'
import Vuex from 'vuex'

import { state, mutations } from './default'
import companies from './modules/companies'
import cart from './modules/cart/cart'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        companies,
        cart
    },
    state,
    mutations
})

export default store