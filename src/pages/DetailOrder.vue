<template>
  <div>
    <div class="row my-4">
      <h1 class="title-tenant">
        Detalhes do Pedido
        <strong>{{ identify }}</strong>
      </h1>
    </div>

    <div class="row my-4">
      <div class="col-sm-12">
        <ul>
          <li>Número: {{ identify }}</li>
          <li>Total: R$ {{ order.total }}</li>
          <li>Data: {{ order.date }}</li>
          <li>
            Status:
            <span class="badge bg-success">{{ order.status }}</span>
          </li>
          <li v-if="order.table.identify">
            Mesa:
            <ul>
              <li>Identificador: {{ order.table.identify }}</li>
              <li>Descrição: {{ order.table.description }}</li>
            </ul>
          </li>
          <li>
            Cliente:
            <ul v-if="order.client.name">
              <li>Nome: {{ order.client.name }}</li>
              <li>E-mail: {{ order.client.email }}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <!-- details order -->

    <hr />

    <div class="row my-4">
      <div class="col-12">
        <h4>Produtos</h4>
      </div>

      <div class="col-6 my-1" v-for="(product, index) in order.products" :key="index">
        <div class="restaurant-card">
          <a href="#">
            <img class="card-img-top" :src="product.image" :alt="product.title" />
          </a>
          <div class="restaurant-card-body">
            <h5>{{ product.title }}</h5>
          </div>
        </div>
      </div>
    </div>
    <!-- products order -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: ['identify'],

    created() {
        this.getOrderByIdentify(this.identify)
                .then(response => this.order = Object.assign(this.order, response.data.data))
                .catch(error => {
                    this.$vToastify.error('Falha carregar detalhes do pedido', 'Erro')

                    this.$router.push({ name: 'home' })
                })
    },

    data() {
        return {
            order: {
                identify: '',
                date: '',
                status: '',
                total: '',
                table: {
                    identify: '',
                    description: '',
                },
                client: {
                    name: '',
                    email: '',
                },
                company: {
                    name: '',
                    image: '',
                },
                products: [],
                evaluations: [],
            }
        }
    },

    methods: {
        ...mapActions([
            'getOrderByIdentify'
        ]),
    },
}
</script>