import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '@/components/Main.vue'
import Form from '@/components/Form.vue'
import Product from '@/components/Product.vue'
import EditProduct from '@/components/EditProduct.vue'

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
    component: Product,
    children: [
      {
        path: 'edit',
        name: 'Edit',
        component: EditProduct
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router