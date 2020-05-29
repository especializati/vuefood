<template>
    <div class="row">

      <div class="col-lg-3">

        <h1 class="my-4 title-tenant">
          {{ company.name }} (<a href="#" @click.prevent="removeCompanySelected">x</a>)
        </h1>
        <h2 v-if="company.table.identify">
          Mesa: {{ company.table.name }}
          (<a href="#" @click.prevent="removeTableCompany">x</a>)
        </h2>
        <div class="list-group">
          <a href="#"
            :class="['list-group-item', categoryInFilter('')]"
            @click.prevent="filterByCategory('')">
            Todas
          </a>
          <a href="#"
            v-for="(category, index) in categories.data" :key="index"
            :class="['list-group-item', categoryInFilter(category.identify)]"
            @click.prevent="filterByCategory(category.identify)">
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
            <div :class="['card', 'h-100', {'disabled' : productInCart(product)}]">
              <a href="#">
                <img class="card-img-top" :src="product.image" alt="">
              </a>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#">{{ product.title }}</a>
                </h4>
                <h5>R$ {{ product.price | formatprice }}</h5>
                <p class="card-text">{{ product.description }}</p>
              </div>
              <div class="card-footer card-footer-custom">
                <a href="#" @click.prevent="addProdCart(product)">
                  Adicionar no Carrinho <i class="fas fa-cart-plus"></i>
                </a>
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
import { mapState, mapActions, mapMutations } from 'vuex'

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
      categories: state => state.companies.categoriesCompanySelected,
      productsCart: state => state.cart.products
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

    ...mapMutations({
      addProdCart: 'ADD_PRODUCT_CART',
      removeTableCompany: 'REMOVE_TABLE_COMPANY',
      removeCompany: 'REMOVE_COMPANY_SELECTED',
    }),

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

    filterByCategory (identify) {
      this.filters.category = identify

      this.loadProducts()
    },

    categoryInFilter (identify) {
      return identify === this.filters.category ? 'active' : ''
    },

    productInCart (product) {
      let inCart = false

      this.productsCart.map((prodCart, index) => {
        if (prodCart.identify === product.identify)
          inCart = true
      })

      return inCart
    },

    removeCompanySelected () {
      this.removeCompany()

      this.$router.push({name: 'home'})
    }
  },
}
</script>