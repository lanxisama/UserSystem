import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Customers from '@/components/Customers'
import About from '@/components/About'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Customers',
      component: Customers,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path:"*",
      redirect:"/"
    }
  ],
  mode:'history'
})
