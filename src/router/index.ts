import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import HomeUnSafeView from "@/views/HomeUnSafeView.vue";
import LoginUnsafeView from "@/views/LoginUnsafeView.vue";
import RegisterUnsafeView from '@/views/RegisterUnsafeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/unsafe/home',
      name: 'unSafeHome',
      component: HomeUnSafeView,
    },
    {
      path: '/unsafe/login',
      name: 'unSafeLogin',
      component: LoginUnsafeView,
    },
    {
      path: '/unsafe/register',
      name: 'unSafeRegister',
      component: RegisterUnsafeView,
    },
  ]
})

export default router
