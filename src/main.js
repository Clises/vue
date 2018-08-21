// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../src/assets/common/common.css'/*引入公共样式*/

import {store} from './store/index'

import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
Vue.use(Vant);

// import MuseUI from 'muse-ui'
// import 'muse-ui/dist/muse-ui.css'
// Vue.use(MuseUI)


// require('swiper/dist/css/swiper.css')
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// Vue.use(VueAwesomeSwiper)

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);
import util from './util.js'
Vue.use(util);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
