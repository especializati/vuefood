<template>
    <div>
        <div class="row my-4">
            <h1 class="title-tenant">Meus Pedidos</h1>
        </div>

        <div class="row my-4">

            <div class="col-sm-6 my-4" v-for="(order, index) in myOrders.data" :key="index">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Pedido: <strong>{{ order.identify }}</strong></h5>
                        <p class="card-text">Data: {{ order.date | dateformat }}</p>
                        <router-link :to="{name: 'order.detail', params: {identify: order.identify}}" class="btn btn-danger">
                            Detalhes
                        </router-link>
                    </div>
                </div>
            </div>
            
        </div> <!-- orders -->
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    created() {
        if (this.me.name === '') {
            return this.$router.push({name: 'home'})
        }

        this.getMyOrders()
                .catch(_=> this.$vToastify.error('Falha ao buscar os pedidos', 'Erro'))
    },

    computed: {
        ...mapState({
            myOrders: state => state.orders.myOrders,
            me: state => state.auth.me
        }),
    },

    methods: {
        ...mapActions([
            'getMyOrders'
        ]),
    },
}
</script>