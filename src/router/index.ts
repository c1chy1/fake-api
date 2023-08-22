import { createRouter, createWebHistory ,} from 'vue-router'




const routes = [

    {
        path: '/axios',
        name: 'Axios',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "axios" */ '@/views/Axios.vue')
    },
    {
        path: '/graphql',
        name: 'Graphql',

        component: () => import(/* webpackChunkName: "graphql" */ '@/views/Graphql.vue')
    }


]





const router = createRouter({
    history: createWebHistory(),
    routes,

})




export default router