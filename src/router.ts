import { createRouter, createWebHistory } from 'vue-router'
import Axios from './views/Axios.vue'
import Graphql from './views/Graphql.vue'
import App from './App.vue'

const history = createWebHistory()

const router = createRouter({
    history: history,
    routes: [


        {
            path: '/axios',
            component: Axios,
        },
        {
            path: '/graphql',
            component: Graphql,
        },

    ],
})

export default router