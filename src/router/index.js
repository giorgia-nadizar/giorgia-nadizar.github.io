import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Biography from '../views/Biography.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/publications/:id',
    name: 'Publication',
    component: () => import(/* webpackChunkName: "about" */ '../views/Publication.vue')
  },
  {
    path: '/',
    component: Main,
    children: [
      {
        path: 'biography',
        name: 'Biography',
        component: Biography
      },
      {
        path: 'cv',
        name: 'CV',
        component: () => import(/* webpackChunkName: "about" */ '../views/CV.vue')
      },
      {
        path: 'publications',
        name: 'Publications',
        component: () => import(/* webpackChunkName: "about" */ '../views/Publications.vue')
      },
      { path: '*', redirect: '/biography' }
    ]
  },
  { path: '*', redirect: '/biography' }
]

const router = new VueRouter({
  routes
})

export default router
