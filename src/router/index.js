import { createRouter, createWebHistory } from 'vue-router';
import WelcomePage from '../views/WelcomePage.vue';
import Home from '../views/Home.vue';
import Cbt from '../views/Cbt.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'WelcomePage',
      component: WelcomePage
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Cbt',
      name: 'Cbt',
      component: Cbt
    }
  ]
});

export default router;
