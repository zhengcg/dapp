// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// import store from './store/store'
import router from './router'
import axios from './server'
import './assets/css/my-mint.scss';//全局修改mint-UI样式  
import './assets/js/jquery.js';
Vue.prototype.axios = axios;
Vue.use(MintUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  axios,
  router,
  // store,
  template: '<App/>',
  components: { App }
})
