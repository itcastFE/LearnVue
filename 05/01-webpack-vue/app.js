// 这里的vue就是通过npm安装引入过来的
import Vue from 'vue'
import App from './components/App.vue'

new Vue({
  el: '#app',
  // render函数的作用是将组件渲染到页面中去
  // render: function (h) {
  //   return h(App)
  // }
  render: h => h(App)
})