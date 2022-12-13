import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostView from "../views/PostView.vue";
import CreatePost from "../views/CreatePost";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/post/:postId',
    name: 'postView',
    component: PostView,
  },
  {
    path: '/createPost',
    name: 'createPost',
    component: CreatePost,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
