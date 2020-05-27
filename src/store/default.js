export const state = {
    preloader: false,
    textPreloader: 'Carregando...'
}

export const mutations = {
    SET_PRELOADER (state, status) {
        state.preloader = status
        state.textPreloader = 'Carregando...'
    },

    SET_TEXT_PRELOADER (state, text) {
        state.textPreloader = text
    },
}