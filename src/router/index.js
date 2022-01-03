import {createRouter, createWebHistory} from "vue-router";
import Posts from '../components/Posts';
import Home from "../views/Home";

const routes = [
  {
    path: '/posts/user/:userId',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
