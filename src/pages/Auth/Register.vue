<template>
    <!-- login -->
    <div class="d-flex justify-content-center h-100 my-5">
      <div class="user_card">
        <div class="d-flex justify-content-center">
          <div class="brand_logo_container">
            <router-link :to="{name: 'home'}">
                <img src="@/assets/imgs/vue-food.png" class="brand_logo" alt="Logo">
            </router-link>
          </div>
        </div>
        <div class="d-flex justify-content-center form_container">
          <form>
            <div class="input-group mb-3">
              <div class="input-group-append">
                <span class="input-group-text"><i class="fas fa-user"></i></span>
              </div>
              <input type="text" name="" class="form-control input_user" value="" placeholder="Nome">
            </div>
            <div class="input-group mb-3">
              <div class="input-group-append">
                <span class="input-group-text"><i class="fas fa-envelope"></i></span>
              </div>
              <input type="text" name="" class="form-control input_user" value="" placeholder="E-mail">
            </div>
            <div class="input-group mb-2">
              <div class="input-group-append">
                <span class="input-group-text"><i class="fas fa-key"></i></span>
              </div>
              <input type="password" name="" class="form-control input_pass" value="" placeholder="Senha">
            </div>
              <div class="d-flex justify-content-center mt-3 login_container">
          <button type="button" name="button" class="btn login_btn">Cadastrar</button>
           </div>
          </form>
        </div>
    
        <div class="mt-4">
          <div class="d-flex justify-content-center links">
            Já tem conta? <router-link :to="{name: 'login'}" class="ml-2">Login</router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- login-->
</template>