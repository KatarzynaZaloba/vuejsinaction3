import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/components/Main.vue'
import Form from '@/components/Form.vue'
//import Product from '@/components/Product.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  },
  {
    path: '/product/:id',
    name: 'Id',
    component: Product
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router