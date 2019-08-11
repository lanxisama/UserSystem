import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Customers from '@/components/Customers'
import About from '@/components/About'
import AddUser from '@/components/AddUser'
import Edit from '@/components/Edit'
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
      path: '/add-user',
      name: 'adduser',
      component: AddUser,
    },
    {
      path:"/edit/:id",
      name:"edit",
      component:Edit
    },
    {
      path:"*",
      redirect:"/"
    }
  ],
  mode:'history'
})
