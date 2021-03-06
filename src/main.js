import Vue from 'vue'
import App from './components/app/App'
import router from './router'

Vue.config.devtools = false // Disable Vue DEVTools notification
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
