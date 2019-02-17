// 这里的vue就是通过npm安装引入过来的
import Vue from 'vue'
import App from './components/App.vue'
import Login from './components/Login.vue'
import VueRouter from 'vue-router'

// 启用路由插件
Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    {name: 'Login', path: '/login', component: Login}
  ]
})

new Vue({
  el: '#app',
  // render函数的作用是将组件渲染到页面中去
  // render: function (h) {
  //   return h(App)
  // }
  router,
  render: h => h(App)
})