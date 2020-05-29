export default {
    SET_COMPANIES (state, companies) {
        state.items = companies
    },

    SET_COMPANY_SELECTED (state, company) {
        state.companySelected = Object.assign(state.companySelected, company)
    },

    REMOVE_COMPANY_SELECTED (state) {
        state.companySelected = {
            name: '',
            products: {
                data: []
            },
            table: {
                identify: '',
                description: '',
                name: ''
            }
        },
    
        state.categoriesCompanySelected = {
            data: []
        }
    },

    SET_CATEGORIES_COMPANY (state, categories) {
        state.categoriesCompanySelected = categories
    },

    SET_PRODUCTS_COMPANY (state, products) {
        state.companySelected.products = products
    },

    SET_TABLE_COMPANY (state, table) {
        state.companySelected.table = table
    },

    REMOVE_TABLE_COMPANY (state, table) {
        state.companySelected.table = {
            identify: '',
            description: '',
            name: ''
        }
    },
}