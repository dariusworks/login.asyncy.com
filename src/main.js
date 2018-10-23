import Vue from 'vue'
import Asyncy from '@/Asyncy'
import router from '@/router'
// import store from '@/store'
import '@/components'
import '@/plugins'

Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: h => h(Asyncy)
}).$mount('#asyncy')
