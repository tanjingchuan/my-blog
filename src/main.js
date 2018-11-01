// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from "vue-resource"
import VueRouter from "vue-router"
import ShowBlogs from "./components/ShowBlogs"
import AddBlog from "./components/AddBlog"
import Routes from "./routes"


Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)

Vue.directive("rainbow",{
  bind(el,binding,vnode){
    el.style.color = "red";
  }
})

// Vue.directive("widen",{
//   bind(el,binding,vnode){
//     if(binding.value == "wide"){
//       el.style.maxWidth = 1260 + "px";
//     }
//   }
// })

// 自定义过滤器
// Vue.filter("to-uppercase",function(value){
//   return value.toUpperCase();
// })

// 路由
const router = new VueRouter({
  routes: Routes,
  mode: "history"
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router: router
})
