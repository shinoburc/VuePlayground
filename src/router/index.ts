import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
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
      //content: import(/* webpackChunkName: "about" */ '@/views/InputForm.vue')
      // for electron
      content: () => import('@/views/InputForm.vue')
    }
  },
  {
    path: '/printing',
    name: 'Printing',
    components: {
      application_header: ApplicationHeader,
      printing: () => import('@/views/Printing.vue')
    }
  },
  {
    path: '/report_A4',
    name: 'A4',
    components: {
      printing: () => import('@/reports/A4.vue')
    }
  },
  {
    path: '/report_A4_Landscape',
    name: 'A4Landscape',
    components: {
      printing: () => import('@/reports/A4Landscape.vue')
    }
  },
  {
    path: '/report_A5',
    name: 'A5',
    components: {
      printing: () => import('@/reports/A5.vue')
    }
  },
  {
    path: '/report_Invoice',
    name: 'Invoice',
    components: {
      printing: () => import('@/reports/Invoice.vue')
    }
  },
  {
    path: '/report_Flexible',
    name: 'Flexible',
    components: {
      printing: () => import('@/reports/Flexible.vue')
    }
  }
]

const router = createRouter({
  //history: createWebHistory(process.env.BASE_URL),
  history: process.env.IS_ELECTRON ? createWebHashHistory(process.env.BASE_URL) : createWebHistory(process.env.BASE_URL),
  routes
})

export default router
