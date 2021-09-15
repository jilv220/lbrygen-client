import App from '@/App.vue'
import Search from '@/components/Search.vue'
import { createRouter, createWebHistory } from '@ionic/vue-router';


const routes = [
  {
    path: '/',
    name: 'app',
    component: App
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
