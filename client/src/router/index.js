import { createRouter, createWebHistory } from 'vue-router'

const routes = [
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
  },
  {
    path: '/bookmarkhistory',
    name: 'bookmarkhistory',
    component: () => import('@/views/BookmarkHistory')
  },
  {
    path: '/',
    redirect: 'songs'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
