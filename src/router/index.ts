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
      application_header: ApplicationHeader,
      printing: import('../views/Printing.vue')
    }
  },
  {
    path: '/report_A4',
    name: 'ReportA4',
    components: {
      printing: import('../reports/ReportA4.vue')
    }
  },
  {
    path: '/report_A4_Landscape',
    name: 'ReportA4Landscape',
    components: {
      printing: import('../reports/ReportA4Landscape.vue')
    }
  },
  {
    path: '/report_A5',
    name: 'ReportA5',
    components: {
      printing: import('../reports/ReportA5.vue')
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
