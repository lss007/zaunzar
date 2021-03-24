import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

require('./assets/css/font-awesome.min.css'),
require('./assets/css/custom-style.css')

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
