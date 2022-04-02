import Search from '@/components/Search.vue'
import Stream from '@/components/Stream.vue'
import { createRouter, createWebHistory } from '@ionic/vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Search
  },
  {
    path: '/stream',
    component: Stream,
    props: route => ({ stream: route.query.st })
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
