import Vue from 'vue'
import VueRouter from 'vue-router'

const Install = () => import("../views/TheInstall.vue")
const Start = () => import("../views/TheStart.vue")
const Guide = () => import("../views/TheGuide.vue")
const Other = ()=> import("../views/TheOther.vue")
const NotFound = ()=> import("../views/NotFound.vue")

Vue.use(VueRouter)

const routes = [
  {
    path: "/install",
    name: "install",
    component: Install
  },
  {
    path: "/start",
    name: "start",
    component: Start
  },
  {
    path: "/guide",
    name: "guide",
    component: Guide
  },
  {
    path: "/other",
    name: "other",
    component: Other
  },
  {
    path: "/404",
    name: "NotFound",
    component: NotFound
  },
  {
    path: '/',
    redirect: '/install'
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  routes
})

export default router
