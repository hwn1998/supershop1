import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from './router/'
import axios from 'axios'




Vue.use(ElementUI);

Vue.prototype.$http = axios;
// 配置请求根路径
axios.defaults.baseURL = 'http://106.53.73.30:8888/api/private/v1/'

Vue.config.productionTip = false

new Vue({
  router,

  render: h => h(App),
}).$mount('#app')
