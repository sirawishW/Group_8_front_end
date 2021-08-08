import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Leaderboard from '../views/LeaderboardUI.vue'
import Shop from '../views/ShopUI.vue'
import Numalee from '../views/Numalee.vue'
import JingleBell from '../views/JingleBell.vue'
import QuizzEntrance1 from '../views/QuizzEntrance1.vue'
import QuizzEntrance2 from '../views/QuizzEntrance2.vue'
import Quizz from '../views/Quizz.vue'
import Note from '../views/Note.vue'
import Lesson from '../views/LessonsPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/note',
    name: 'Note',
    component: Note
  },
  {
    path: '/numalee',
    name: 'Numalee',
    component: Numalee
  },
  {
    path: '/quizz_entrance1',
    name: 'QuizzEntrance1',
    component: QuizzEntrance1
  },
  {
    path: '/quizz_entrance2',
    name: 'QuizzEntrance2',
    component: QuizzEntrance2
  },
  {
    path: '/quizz',
    name: 'Quizz',
    component: Quizz
  },
  {
    path: '/jingle-bell',
    name: 'JingleBell',
    component: JingleBell
  },
  {
    path: '/leaderboard',
    name: 'Leaderboard',
    component: Leaderboard
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/lesson',
    name: 'Lesson',
    component: Lesson
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
