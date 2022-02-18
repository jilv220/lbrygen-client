import Search from '@/components/Search.vue'
import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Search
  },
]

export default createRouter({
  history: createWebHistory(),
  routes
})
