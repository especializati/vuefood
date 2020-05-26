<template>
    <div class="row">

      <div class="col-lg-12">

        <h1 class="my-4 title-tenant">Restaurantes</h1>

        <div class="row my-4">

          <div class="col-lg-4 col-md-6 mb-4" v-for="(company, index) in companies.data" :key="index">
            <div class="restaurant-card">
              <a href="vitrine-tenant.html">
                <img v-if="company.image"
                  class="card-img-top"
                  :src="company.image"
                  :alt="company.name">
                <img v-else
                  class="card-img-top"
                  src="@/assets/imgs/vue-food.png"
                  :alt="company.name">
              </a>
              <div class="restaurant-card-body">
                <h3>
                  <router-link :to="{name: 'products'}">
                    {{ company.name }}
                  </router-link>
                </h3>
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
import { mapActions, mapState } from 'vuex'

export default {
  mounted() {
    this.getCompanies()
          .catch(response => this.$vToastify.error('Falha ao Carregar Empresas', 'Erro'))
  },

  computed: {
    // companies () {
    //   return this.$store.state.companies.items
    // }
    ...mapState({
      companies: state => state.companies.items
    })
  },

  methods: {
    ...mapActions([
      'getCompanies'
    ])
  }
}
</script>