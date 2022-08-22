import { createRouter, createWebHistory } from 'vue-router';
import adminAuth from '../services/adminAuth.js';
import HomeView from '../views/HomeView.vue';
import RegisterView from '../views/RegisterView.vue';
import LoginView from '../views/LoginView.vue';
import UsersView from '../views/UsersView.vue';
import EditView from '../views/EditView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    beforeEnter: adminAuth
  },
  {
    path: '/users',
    name: 'users',
    component: UsersView,
    beforeEnter: adminAuth
  },
  {
    path: '/users/edit/:id',
    name: 'user-edit',
    component: EditView,
    beforeEnter: adminAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
