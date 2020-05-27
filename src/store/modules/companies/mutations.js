export default {
    SET_COMPANIES (state, companies) {
        state.items = companies
    },

    SET_COMPANY_SELECTED (state, company) {
        state.companySelected = Object.assign(state.companySelected, company)
    },

    SET_CATEGORIES_COMPANY (state, categories) {
        state.categoriesCompanySelected = categories
    },

    SET_PRODUCTS_COMPANY (state, products) {
        state.companySelected.products = products
    },
}