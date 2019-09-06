import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import animate from 'animate.css'
import vueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(animate);
Vue.use(iView);
Vue.use(vueAxios, axios);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
