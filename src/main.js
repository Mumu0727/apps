import Vue from 'vue'
import App from './App.vue'



import 'animate.css';

import './assets/css/style.css'

import './assets/js/TouchSlide.js'
// 引入状态管理
import store from './plugins/store'
// 引入路由
import router from './plugins/router'

router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
  // 或
  // window.scroll(0, 0);
});

let local=JSON.parse(window.localStorage.getItem('newsapp_user'));
if(!local) local = {err:1}
store.commit('UPDATE_USER',local)

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,store
}).$mount('#app')
