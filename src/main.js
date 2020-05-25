import Vue from 'vue'
import App from './App.vue'
import Skills from "@/components/Skills";
import About from "@/components/About";
import Router from 'vue-router';

// import router from './router'

Vue.use(Router)

Vue.config.productionTip = false

const routes = [
  {
    path:'/',
    name:'skills',
    component:Skills
  },
  {
    path: '/about/:name',
    name:'about',
    component: About
  }
]
const router = new Router({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
