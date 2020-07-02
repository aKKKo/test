import Vue from 'vue'
import App from './App.vue'
import routXUIer from './router'

Vue.config.productionTip = false

new Vue({
  router: routXUIer,
  render: h => h(App),
}).$mount('#app')
