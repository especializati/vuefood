import Vue from 'vue'
import BaseTemplate from './layouts/BaseTemplate'
import router from './routes'

Vue.config.productionTip = false

new Vue({
  render: h => h(BaseTemplate),
  router
}).$mount('#app')
