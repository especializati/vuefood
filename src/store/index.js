import Vue from 'vue'
import Vuex from 'vuex'

import { state, mutations } from './default'
import companies from './modules/companies'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        companies
    },
    state,
    mutations
})

export default store