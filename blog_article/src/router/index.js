import { createRouter, createWebHistory } from 'vue-router'
import ArticlesView from '@/views/ArticlesView.vue'

const routes = [
  {
    path: '/',
    name: 'articles',
    component: ArticlesView
  },
  {
    path: '/article',
    name: 'article',
    // route level code-splitting
    // this generates a separate chunk (article.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "article" */ '@/views/ArticleView.vue')
  },
  {
    path: '/articles/new',
    name: 'articleForm',
    component: () => import(/* webpackChunkName: "article" */ '@/views/ArticleFormView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
