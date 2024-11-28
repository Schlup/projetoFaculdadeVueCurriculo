import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import CadastrarCurriculo from '../components/CadastrarCurriculo.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/cadastrar',
        name: 'CadastrarCurriculo',
        component: CadastrarCurriculo
    }
    // Add other routes as needed
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router