export default {
    SET_COMPANIES (state, companies) {
        state.items = companies
    },

    SET_COMPANY_SELECTED (state, company) {
        state.companySelected = company
    }
}