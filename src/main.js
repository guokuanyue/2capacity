// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VCharts from 'v-charts'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/index.css'
import '@/assets/css/environment.css'
import '@/assets/css/fireMoniter.css'
// 导入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;
// 导入axios
import axios from 'axios'
import qs from 'qs'
Vue.prototype.$qs = qs
Vue.prototype.$http = axios
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
axios.defaults.baseURL = 'http://192.168.0.209:8001/netgate-server/'


import ElementUI from 'element-ui'
Vue.use(VCharts)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
