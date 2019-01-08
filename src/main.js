// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './stroe/stroe'
import router from './router'
import axios from 'axios'
import moment from 'moment'
import 'babel-polyfill'
import 'font-awesome/css/font-awesome.min.css'
import 'iview/dist/styles/iview.css'
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.use(ElementUI);
Vue.filter('dateformat', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
