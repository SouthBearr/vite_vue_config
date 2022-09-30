import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'News',
        component: () => import('../pages/page/index.vue'),
        meta: {
            layout: 'default',
            requiresAuth: false,
        },
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    next()
    window.scrollTo(0, 0)
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         const userIsLogin = true;
//         // eslint-disable-next-line
//         if (!!userIsLogin) {
//             next()
//             return
//         }
//         next('/')
//     } else {
//         next()
//     }
})

export default router
