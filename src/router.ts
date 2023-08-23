import { createRouter, createWebHistory } from 'vue-router'
import Axios from './views/Axios.vue'
import Graphql from './views/Graphql.vue'



const router = createRouter({
    history: createWebHistory(),
    routes: [


        {
            name : 'axios',
            path: '/axios',
            component: Axios,
     /*       beforeEnter: (to, from, next) => {
                // Perform authentication or authorization checks
                // Call `next()` to proceed or redirect to another route
                location.reload();
            },*/
        },
        {
            name : 'graphql',
            path: '/graphql',
            component: Graphql,
        },

    ],
})


/*
router.beforeEach((to, from, next) => {
    // Perform any necessary checks or operations
    // Then trigger the page reload
    location.reload();
});
*/

export default router