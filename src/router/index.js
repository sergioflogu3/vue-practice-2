import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        redirect: '/product'
    },
    {
        path: '/product',
        name: 'product',
        component: () => import(/* webpackChunkName: "product" */ '../views/ProductView.vue'),
        meta: {
            title: 'Productos'
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
