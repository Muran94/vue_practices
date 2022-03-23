import { createRouter, createWebHistory } from 'vue-router'
import MailsView from '../views/MailsView.vue'

const routes = [
  {
    path: '/',
    component: MailsView
  },
  {
    path: '/mails/:id',
    component: () => import(/* webpackChunkName: "mail" */ '../views/MailView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
