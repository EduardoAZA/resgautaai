import { createMemoryHistory, createRouter } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import RescueView from '../pages/RescueView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/adocao', component: RescueView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;