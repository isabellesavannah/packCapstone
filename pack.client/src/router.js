import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/account/:id',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard

  },
  {
    path: '/createProfile',
    name: 'CreateProfile',
    component: loadPage('CreateProfilePage'),
    beforeEnter: authGuard
  },
  {
    path: '/Profiles',
    name: 'Profiles',
    component: loadPage('ProfilesPage'),
    beforeEnter: authGuard
  }
]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router
