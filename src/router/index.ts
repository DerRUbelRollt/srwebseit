import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import OverMe from '@/views/OverMe.vue'
import CoachingAndTherapy from '@/views/CoachingAndTherapy.vue'
import Prices from '@/views/Prices.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: HomeView
  },{
    path: '/overMe',
    name: 'OverMe',
    component: OverMe
  },{
    path: '/coachingAndTherapy',
    name: 'CoachingAndTherapy',
    component: CoachingAndTherapy
  },{
    path: '/prices',
    name: 'Prices',
    component: Prices
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
