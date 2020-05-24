import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Building from '../views/Building.vue'

function lazyload(view:string) {
  console.log(`Loaded view ${view}`);
  return () => import(`@/views/${view}.vue`)
}

Vue.use(VueRouter)

  const indev_routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Building',
    component: Building
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: lazyload('About')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: indev_routes
})

export default router
