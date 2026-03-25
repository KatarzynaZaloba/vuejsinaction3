import { createRouter, createWebHistory } from 'vue-router'
import Form from '@/components/Form.vue'
import Main from '@/components/Main.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      props: true
    },
    {
      path: '/form',
      name: 'Form',
      component: Form,
      props: true
    }
  ]
})

export default router