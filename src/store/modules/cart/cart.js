export default {

    state: {
        products: [],
    },

    mutations: {
        ADD_PRODUCT_CART (state, product) {
            state.products.push({
                qty: 1,
                identify: product.identify,
                product,
            })
        },

        REMOVE_PROD_CART (state, product) {
            state.products = state.products.filter((prodCart, index) => {
                return prodCart.identify !== product.identify
            })
        },

        INCREMENT_QTY_PROD_CART (state, product) {
            state.products = state.products.map((prodCart, index) => {
                if (prodCart.identify === product.identify) {
                    state.products[index].qty++
                }

                return state.products[index]
            })
        },

        DECREMENT_QTY_PROD_CART (state, product) {
            state.products = state.products.filter((prodCart, index) => {
                if (prodCart.identify === product.identify) {
                    state.products[index].qty = state.products[index].qty - 1
                }

                if (state.products[index].qty > 0)
                    return state.products[index]
            })
        },

        CLEAR_CART (state) {
            state.products = []
        },
    },
}