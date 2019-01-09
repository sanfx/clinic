import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Checkup from '@/views/Checkup'
import Contact from '@/components/Contact'
import Attend from '@/components/Attend'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: 'attend',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/attend',
      name: 'Attend',
      component: Attend
    },
    {
      path: '/checkup',
      name: 'Checkup',
      component: Checkup
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
