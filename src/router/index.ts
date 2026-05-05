import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import InsideTheCupboard from "@/views/InsideTheCupboard.vue";


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/',
        name: 'cupboard',
        component: InsideTheCupboard
    },
    // здесь будут другие маршруты
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router