import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Books from '../views/Books.vue'
import BookShow from '../views/BookShow'
import BookEdit from '../views/BookEdit'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/books',
    name: 'books',
    component: Books
  },
  {
    path: '/books/:id',
    name: 'book-show',
    component: BookShow,
    // パラメータを受け取れるようにする
    params: true
  },
  {
    path: '/books/:id/edit',
    name: 'book-edit',
    component: BookEdit,
    params: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
