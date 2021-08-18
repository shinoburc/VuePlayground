import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import ApplicationHeader from '../components/ApplicationHeader.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    components: {
      application_header: ApplicationHeader,
      content: Home
    }
  },
  {
    path: '/input_form',
    name: 'InputForm',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components: {
      application_header: ApplicationHeader,
      content: import(/* webpackChunkName: "about" */ '../views/InputForm.vue')
    }
  },
  {
    path: '/printing',
    name: 'Printing',
    components: {
      printing: import('../views/Printing.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
