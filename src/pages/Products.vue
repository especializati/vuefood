<template>
    <div class="row">

      <div class="col-lg-3">

        <h1 class="my-4 title-tenant">{{ company.name }}</h1>
        <div class="list-group">
          <a href="#" class="list-group-item active">Categoria 1</a>
          <a href="#" class="list-group-item">Categoria 2</a>
          <a href="#" class="list-group-item">Categoria 3</a>
        </div>

      </div>
      <!-- /.col-lg-3 -->

      <div class="col-lg-9">

        <div class="row my-4">

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
              <a href="#"><img class="card-img-top" src="imgs/pizza.png" alt=""></a>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#">Pizza</a>
                </h4>
                <h5>R$ 12,99</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
              </div>
              <div class="card-footer card-footer-custom">
                <router-link :to="{name: 'cart'}">
                    Adicionar no Carrinho <i class="fas fa-cart-plus"></i>
                </router-link>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="disabled card h-100">
              <a href="#"><img class="card-img-top" src="imgs/acai.png" alt=""></a>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#">Açai na Tijela</a>
                </h4>
                <h5>R$ 12,99</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
              </div>
              <div class="card-footer card-footer-custom">
                <a href="carrinho.html">Adicionar no Carrinho <i class="fas fa-cart-plus"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
              <a href="#"><img class="card-img-top" src="imgs/japonesa.png" alt=""></a>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#">Item Three</a>
                </h4>
                <h5>R$ 12,99</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
              </div>
              <div class="card-footer card-footer-custom">
                <a href="carrinho.html">Adicionar no Carrinho <i class="fas fa-cart-plus"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
              <a href="#"><img class="card-img-top" src="imgs/lanches.png" alt=""></a>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#">Sanduíche</a>
                </h4>
                <h5>R$ 12,99</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
              </div>
              <div class="card-footer card-footer-custom">
                <a href="carrinho.html">Adicionar no Carrinho <i class="fas fa-cart-plus"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
              <a href="#"><img class="card-img-top" src="imgs/pizza.png" alt=""></a>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#">Pizza Vegana</a>
                </h4>
                <h5>R$ 12,99</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
              </div>
              <div class="card-footer card-footer-custom">
                <a href="carrinho.html">Adicionar no Carrinho <i class="fas fa-cart-plus"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
              <a href="#"><img class="card-img-top" src="imgs/acai.png" alt=""></a>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#">Açai Bomba</a>
                </h4>
                <h5>R$ 12,99</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
              </div>
              <div class="card-footer card-footer-custom">
                <a href="carrinho.html">Adicionar no Carrinho <i class="fas fa-cart-plus"></i></a>
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
import { mapState } from 'vuex'

export default {
  props: ['companyFlag'],

  created() {
    if (this.company.name === '') {
      return this.$router.push({name: 'home'})
    }
  },

  computed: {
    ...mapState({
      company: state => state.companies.companySelected,
    }),
  },
}
</script>