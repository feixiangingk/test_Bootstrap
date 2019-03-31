// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
// 安装 cnpm install axios --save
import axios from "axios"
import VueSocketIO  from 'vue-socket.io'
import SocketIO  from 'socket.io-client';


Vue.use(new VueSocketIO({
  debug: true,
  connection: SocketIO('http://192.168.86.1:5000/test_conn'), //options object is Optional
})
);
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$axios = axios


//安装 个性化图标插件
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
