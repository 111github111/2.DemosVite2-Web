import { createWebHashHistory, createRouter, RouterOptions, RouteRecordRaw } from 'vue-router';


const routes: Readonly<RouteRecordRaw[]> = [
    {
        path: '/',
        redirect: '/codeLight',
    },
    // {
    //     name: 'home',
    //     path: '/home',
    //     component: () => import('../views/Home.vue')
    // },
    {
        name: '表单设计器',
        path: '/designer',
        redirect: '/designer/MyDesigner',
        children: [
            {
                name: '设计器',
                path: '/designer/MyDesigner',
                component: () => import('../views.codes/FcDesigner/MyDesigner.vue')
            },
            {
                name: '预览效果',
                path: '/designer/MyForm',
                component: () => import('../views.codes/FcDesigner/MyForm.vue')
            }
        ]
    },
    //{
    //    name: '代码高亮',
    //    path: '/codeLight',
    //    component: () => import('../views.codes/CodeLight.vue')
    //}
]

const myRouter = createRouter({
    // 指定路由的模式
    history: createWebHashHistory(),
    routes,
})

export default myRouter;
