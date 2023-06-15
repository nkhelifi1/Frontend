import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/api/exercises',
        name: 'Exercises',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/Exercise.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    linkActiveClass: 'active',
    routes
})

export default router