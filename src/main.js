import Vue from 'vue'
import DefaultTemplate from './layouts/DefaultTemplate'

Vue.config.productionTip = false

new Vue({
  render: h => h(DefaultTemplate),
}).$mount('#app')
