import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CalculatorView from '../views/CalculatorView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  { path: '/calculateur', component: HomeView },
  { path: '/apropos', component: AboutView },
  { path: '/', component: CalculatorView },
  { path: '/contact', component: ContactView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
