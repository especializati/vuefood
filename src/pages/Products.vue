<template>
    <div class="row">

      <div class="col-lg-3">

        <h1 class="my-4 title-tenant">{{ company.name }}</h1>
        <div class="list-group">
          <a href="#"
            class="list-group-item"
            v-for="(category, index) in categories.data" :key="index"
            @click.prevent="filterByCategory(category)">
            {{ category.name }}
          </a>
        </div>

      </div>
      <!-- /.col-lg-3 -->

      <div class="col-lg-9">

        <div class="row my-4">

          <div v-if="company.products.data.length === 0">
            Nenhum produto
          </div>

          <div class="col-lg-4 col-md-6 mb-4" v-for="(product, index) in company.products.data" :key="index">
            <div class="card h-100">
              <a href="#">
                <img class="card-img-top" :src="product.image" alt="">
              </a>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#">{{ product.title }}</a>
                </h4>
                <h5>R$ {{ product.price }}</h5>
                <p class="card-text">{{ product.description }}</p>
              </div>
              <div class="card-footer card-footer-custom">
                <router-link :to="{name: 'cart'}">
                    Adicionar no Carrinho <i class="fas fa-cart-plus"></i>
                </router-link>
              </div>
            </div>
          </div>
          

        </div>
        <!-- /.row -->

      </div>
      <!-- /.col-lg-9 -->

    </div>
    <!-- /.row -->
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: ['companyFlag'],

  created() {
    if (this.company.name === '') {
      return this.$router.push({name: 'home'})
    }

    this.getCategoriesByCompany(this.company.uuid)
          .catch(response => this.$vToastify.error('Falha ao Carregar as Categorias', 'Erro'))

    //this.getProductsByCompany(this.company.uuid)
          //.catch(response => this.$vToastify.error('Falha ao Carregar os Produtos', 'Erro'))        
    this.loadProducts()
  },

  computed: {
    ...mapState({
      company: state => state.companies.companySelected,
      categories: state => state.companies.categoriesCompanySelected
    }),
  },

  data() {
    return {
      filters: {
        category: ''
      }
    }
  },

  methods: {
    ...mapActions([
      'getCategoriesByCompany',
      'getProductsByCompany'
    ]),

    loadProducts () {

      const params = {
        token_company: this.company.uuid,
      }

      if (this.filters.category) {
        params.categories = [
          this.filters.category
        ]
      }

      this.getProductsByCompany(params)
          .catch(response => this.$vToastify.error('Falha ao Carregar os Produtos', 'Erro'))        
    },

    filterByCategory (category) {
      this.filters.category = category.identify

      this.loadProducts()
    }
  },
}
</script>