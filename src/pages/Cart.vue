<template>
    <!-- cart -->
    <div class="card shopping-cart my-4">
        <div class="card-header text-light">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            Carrinho de Compras
            <router-link :to="{ name: 'home' }" class="btn btn-outline-info btn-sm pull-right">
                Continuar Comprando
            </router-link>
            <div class="clearfix"></div>
        </div>
        <div class="card-body">
                <!-- PRODUCT -->
                <div class="row" v-for="(item, index) in products" :key="index">
                    <div class="col-12 col-sm-12 col-md-2 text-center">
                        <img class="img-responsive" :src="item.product.image" width="120" height="80" :alt="item.product.title">
                    </div>
                    <div class="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
                        <h4 class="product-name"><strong>{{ item.product.title }}</strong></h4>
                        <h4>
                            <small>{{ item.product.description }}</small>
                        </h4>
                    </div>
                    <div class="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
                        <div class="col-3 col-sm-3 col-md-6 text-md-right" style="padding-top: 5px">
                            <h6><strong>R$ {{ item.product.price | formatprice }} <span class="text-muted">x</span></strong></h6>
                        </div>
                        <div class="col-4 col-sm-4 col-md-4">
                            <div class="quantity">
                                <input type="button" value="+" class="plus" @click.prevent="incrementQty(item.product)">
                                <input type="number" step="1" max="99" min="1" :value="item.qty" title="Qty" class="qty">
                                <input type="button" value="-" class="minus" @click.prevent="decrementQty(item.product)">
                            </div>
                        </div>
                        <div class="col-2 col-sm-2 col-md-2 text-right">
                            <button
                                type="button"
                                class="btn btn-outline-danger btn-xs"
                                @click.prevent="removeCart(item.product)">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                    <hr>
                </div>
                <!-- END PRODUCT -->

        </div>
        <div class="card-footer card-footer-custom">
            <checkout />
        </div>
    </div>
    <!-- cart-->
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Checkout from './_partials/Checkout'

export default {
    computed: {
        ...mapState({
            products: state => state.cart.products
        }),
    },

    methods: {
        ...mapMutations({
            removeCart: 'REMOVE_PROD_CART',
            incrementQty: 'INCREMENT_QTY_PROD_CART',
            decrementQty: 'DECREMENT_QTY_PROD_CART',
        }),
    },

    components: {
        Checkout
    }
}
</script>