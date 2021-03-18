import Vue from 'vue'
import Router from 'vue-router'
const About = () => import('./components/About.vue') 
const HelloWorld = () => import('./components/HelloWorld.vue') 

Vue.use(Router)

const routes = [
    {
    path: `/`,
    name: 'HelloWorld',
    component: HelloWorld,
    meta: {
      title: 'About',
    },
  },
  {
    path: `/about`,
    name: 'About',
    component: About,
    meta: {
      title: 'About',
    },
  },
]

const router = new Router({
  mode: 'history',
  routes: routes,
})

export default router