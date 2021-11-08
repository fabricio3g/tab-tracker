import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LogIn')
  },
  {
    path: '/songs',
    name: 'songs',
    component: () => import('@/views/Songs')
  },
  {
    path: '/song-create',
    name: 'song-create',
    component: () => import('@/views/CreateSong')
  },
  {
    path: '/songs/:songId',
    name: 'song',
    component: () => import('@/views/ViewSongs')
  },
  {
    path: '/songs/:songId/edit',
    name: 'song-edit',
    component: () => import('@/views/EditSong')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
