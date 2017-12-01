// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//做个弹幕
import Vue from 'vue'
import App from './app'
import routes from './router/index'


Vue.config.productionTip = false



import VueRouter from 'vue-router'
/* eslint-disable no-new */


　Vue.use(VueRouter);

const router = new VueRouter({
	routes
})

new Vue({
  el: '#container',
  template: '<App/>',
  components: { App },
  router
 
  
})