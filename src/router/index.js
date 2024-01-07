import { createRouter, createWebHistory } from 'vue-router';
import WelcomePage from '../views/WelcomePage.vue';
import Home from '../views/Home.vue';
import Cbt from '../views/Cbt.vue';
import Calendar from '../views/CalendarPage.vue';

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
    },
    {
      path: '/Calendar',
      name: 'Calendar',
      component: Calendar
    }
  ]
});

export default router;
