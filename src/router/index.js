import Vue from 'vue'
import VueRouter from 'vue-router'
import Biography from '../views/Biography.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Biography',
    component: Biography
  },
  {
    path: '/cv',
    name: 'CV',
    component: () => import(/* webpackChunkName: "about" */ '../views/CV.vue')
  },
  {
    path: '/publications',
    name: 'Publications',
    component: () => import(/* webpackChunkName: "about" */ '../views/Publications.vue')
  },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  routes
})

export default router
