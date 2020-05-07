import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
import VueMq from 'vue-mq'

Vue.config.productionTip = false

Vue.use(VueMq, {
  breakpoints: {
    sm: 576,
    md: 768,
    lg: 992,
    xl: Infinity,
  }
})

new Vue({
  // el: '#app',
  router,
  render: h => h(App)
}).$mount("#app");
